import React from "react";
import { useParams ,Link} from "react-router-dom";
import styled from "styled-components";
import payment from "../assets/img/paymente.png";
import error from "../assets/img/error.png";
function Pay(props: any) {
  const Pay = styled.div`
    width: 100%;

    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
    }
    h1 {
        text-align: center;
     
      font-weight: bold;
    }
  `;
  const { data }: any = useParams();
  console.log(data);
  return (
    <Pay>
      {data == "COMPLETED" ? (
        <>
          <h1>
            Thank you for your purchase below you will receive an email with
            your order
          </h1>
          <img src={payment} alt="pikcahu" />
        </>
      ) : (
        <>
        <h1>
       
        Opps there was an error<Link to="/">  click me</Link>
        </h1>
        <img src={error} alt="pikcahu" />
      </>
      )}
    </Pay>
  );
}

export default Pay;
