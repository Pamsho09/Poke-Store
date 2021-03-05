import React, { useContext } from "react";
import { PayPalButton } from "react-paypal-button";
import styled from "styled-components";
import AppContext from "../context/AppContext";
import {Link,useHistory} from 'react-router-dom'
import ItemCardPokemon from "../components/ItemCardPokemon";
const Paymentc = styled.div`
  width: 100%;
  height: 90vh;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  .resumen {
    width: 90%;
    overflow-y: scroll;
    overflow-x: hidden;

    height: 50vh;
  }
  .buttons {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .buttons button {
    width: 30%;
    height: 3em;
    font-weight: bold;
    background-color: #fff;
    border: none;
    border-radius: 10px;

  }
  .buttons a {
    display:flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
    box-shadow: 1px 8px 26px rgba(0, 0, 0, 0.3);
    width: 30%;
    height: 3em;
    font-weight: bold;
    background-color: #fff;
    border: none;
    border-radius: 10px;
  }
`;
function Payment() {
  let history = useHistory()
  const { state }: any = useContext(AppContext);
  const { cart }: any = state;
  console.log(cart);
  const paypalOptions = {
    clientId:
      "AVvDQHGbEPI-P7H6bebOSB7nlhWnaVV4YtErXdNpGrQ8hld4cQEiQ2pBml5jshwu1GVQPLA3W5KWoF4Y",
    intent: "capture",
    currency: "USD",
  };
  const buttonStyles = {
    layout: "vertcal",
    shape: "rect",
  };
  const reducer = (accumulator: any, currentValue: any): any =>
    accumulator + currentValue.price * currentValue.quantity;
  const sum = cart.reduce(reducer, 0);
  const handlePaymentStart=(data: any)=>{

console.log(data)

if(data.status==="COMPLETED"){

  history.push(`/pay/COMPLETED`)
}else{

  alert(data.status)
}
  }
  return (
    <Paymentc>
      <h1>Resumen</h1>
      <div className="resumen">
        {cart.map((e: any) => (
          <ItemCardPokemon key={e.id} {...e} resumen={false} />
        ))}
      </div>
      <PayPalButton
        paypalOptions={{
          clientId:
            "AVvDQHGbEPI-P7H6bebOSB7nlhWnaVV4YtErXdNpGrQ8hld4cQEiQ2pBml5jshwu1GVQPLA3W5KWoF4Y",
          intent: "capture",
          currency: "USD",
        }}
        buttonStyles={{
          layout: "vertical",
          shape: "rect",
        }}
        amount={sum}
        onPaymentStart={() => {
          console.log("start payment");
        }}
        onPaymentSuccess={(data) =>handlePaymentStart(data) }
        onPaymentError={(error) => console.log(error)}
      />

<div className="buttons">
        <Link to="/checkout">
          <button> Back</button>
        </Link>

        
      </div>
    </Paymentc>
  );
}

export default Payment;
