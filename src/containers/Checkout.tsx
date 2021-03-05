import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  input {
    box-shadow: 1px 8px 26px rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 3.5em;
    border-radius: 7px;
    border: none;
    outline: none;
    padding-left: 1em;
  }
  .buttons {
    width: 70%;
    display: flex;
    justify-content: space-between;
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
function Checkout() {
  return (
    <Container>
      <form>
        <input type="text" placeholder="Name" name="name" required/>
        <input type="text" placeholder="Email" name="email"required />
        <input type="text" placeholder="Addres" name="addres" required/>
        <input type="text" placeholder="apto" name="apto" required/>
        <input type="text" placeholder="City" name="city"required />
        <input type="text" placeholder="Country" name="country" required/>
        <input type="text" placeholder="State" name="state" required/>
        <input type="text" placeholder="ZIP code" name="cp" required/>
        <input type="text" placeholder="Phone" name="phone" />
      </form>

      <div className="buttons">
        <Link to="/cart">
          <button> Back</button>
        </Link>

        <Link to="/payment">
          <button> Pay</button>{" "}
        </Link>
      </div>
    </Container>
  );
}

export default Checkout;
