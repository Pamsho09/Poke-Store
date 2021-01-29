import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../assets/utils/device";
import {Link} from 'react-router-dom'
function Products(props: any) {
  let color: any = props.data.types;
  const pokeTypes: any = {
    normal: "	#A8A090",
    fighting: "#A05038",
    flying: "	#98A8F0",
    poison: "#B058A0",
    ground: "#78C850",
    rock: "	#B8A058",
    bug: "#A8B820",
    ghost: "#6060B0",
    steel: "#A8A8C0",
    fire: "	#F05030",
    water: "#3899F8",
    grass: "	#7A5848",
    electric: "#F8D030",
    psychic: "	#F870A0",
    ice: "#58C8E0",
    dragon: "	#7860E0",
    dark: "#7A5848",
    fairy: "	#E79FE7",
  };
  const Poke = styled.div`
    @media ${device.movile} {
      width: 15em;
      height: 20em;
      border-radius: 23px;
      background-color: #fff;
      box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
      display: grid;
      justify-content: center;
      justify-items: center;
      grid-template-columns:1fr;
       background-color: ${pokeTypes[color[0].type.name] };
      padding: 0.5em;
    
      img ,a{
        width: 100%;
        border-radius: 10px;
        background-color: #fff;
      }
      .container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .containerImg {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        position: relative;
      }
      .name {
        text-align: center;
        position: absolute;
        top: 90%;
        text-transform: capitalize;
      }
      .allData {
        grid-column: 1/3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        background-color: #ececec;
      }
      i {
        padding: 1em;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: -3px 0 rgba(0, 0, 0, 0.3);
      }
      .price {
        margin: auto;
      }
    }
  `;

  return (
    <>
      <Poke>
        <div className="containerImg">
          {" "}
          <Link to={`/pokemon/${props.data.id}`}> <img src={props.data.sprites.front_default} alt="" />
        
          </Link>
           <h3 className="name">{props.data.name}</h3>
        </div>

        <div className="container">
          <div className="allData">
            <h4 className="price">Price :${props.data.base_experience} </h4>
            <i className="fas fa-cart-plus"></i>
          </div>
        </div>
      </Poke>
    </>
  );
}

export default Products;
