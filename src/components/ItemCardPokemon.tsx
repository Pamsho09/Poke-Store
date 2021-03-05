import React from "react";
import styled from "styled-components";
import {Link }from "react-router-dom"
function ItemCardPokemon(props: any) {

  console.log(props)
  const Items = styled.div`
    width: 90%;
    height: 6em;
    margin:0.5em;
    padding: 0 0.5em;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px  29px 1px rgba(0, 0, 0, 0.3);
    .container {
      display: flex;
      justify-content: center;

      width: 6em;
      position: relative;
    }
    .container img {
      width: 6em;
      height: 6em;
    }
    .container h4 {
      position: absolute;
      top: 80%;
    }
    .data{
        display: grid;
       
    }
    .icon{
        width: 3em;
        height: 3em;
        font-size:xx-large;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  `;
  console.log(props);
  return (
    <Items>
      <div className="container">
        {" "}
        <img src={props.sprite} />
        <h4>{props.name}</h4>
      </div>
      <div className="data">
        <h3>Quantity: {props.quantity}</h3>
        <h3>Price: ${props.price}</h3>
        <h3>Total Price: ${props.price * props.quantity}</h3>
        
      </div>
      
      {props.resumen?<h3 className="icon">
          <i className="far fa-trash-alt"></i>
        </h3>:""}
    </Items>
  );
}

export default ItemCardPokemon;
