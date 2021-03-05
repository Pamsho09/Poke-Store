import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import ItemCardPokemon from "../components/ItemCardPokemon";
import { device } from "../assets/utils/device";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Cart() {
  const Card = styled.div`
    @media ${device.movile} {
      width: 100%;
      height: 100vh;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .containerPokemons {
        width: 90%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: 70vh;
        overflow: scroll;
        gap: 1em;
      }
      .nextBuy {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .nextBuy button,
      .nextBuy a {
        width: 50%;
        height: 2em;
        font-weight: bold;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        text-decoration: none;
        font-size: xx-large;
        background-color: white;
        border: none;
        border-radius: 10px;
      }
      .nextBuy a {
        box-shadow: 1px 1px 29px 1px rgba(0, 0, 0, 0.3);
      }
    }
  `;
  const { state }: any = useContext(AppContext);

  let total = 0;
  state.cart.map((e: any) => {
    total += e.quantity * e.price;
  });
  return (
    <Card>
      <h2>Pokemons</h2>
      <div className="containerPokemons">
        {state.cart.map((item: any) => {
          return <ItemCardPokemon key={item.id} {...item} resumen={true} />;
        })}
      </div>

      <div className="nextBuy">
        <h2>Total :${total} </h2>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </Card>
  );
}

export default Cart;
