import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import AppContext from "../context/AppContext";
import { device } from "../assets/utils/device";
import styled from "styled-components";
import { link } from "fs";

function Pokemon() {
  const { pokemons }: any = useContext(AppContext);
  const { id }: any = useParams();
  let pokemon = pokemons.filter((e: any) => e.data.id == id);
  console.log(pokemon);

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
  const Container = styled.div`
    @media ${device.movile} {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2em;
      border-radius:10px;
      .containerCard {
        border-radius: 10px;
        gap: 0.5em;
        width: 80%;
        background: ${pokeTypes[pokemon[0].data.types[0].type.name]};
        margin-top: 3em;
        display: flex;
        flex-direction: column;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1em;
      }
      .containerCard img {
        width: 90%;
        border-radius: 10px;

        background-color: #ffffff;
      }
      .containerCard img:hover {
      }
      .containerCard h3,
      .containerCard h4 {
        text-transform: capitalize;
        font-size: xx-large;
      }
      .container-radio {
        width: 100%;
        padding: 1em;
        display: flex;
        justify-content: center;
        justify-self: center;
        justify-items: center;
        gap: 1em;
        align-items: center;
      }
      .container-radio button {
        background-color: #ffffff;
        font-weight: bold;
        border-radius: 10px;
        border: none;
        padding: 0.5em;
      }
      .container-quantity {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
      }
      .container-quantity input {
        width: 10%;
        text-align: center;
        border: none;
        outline: none;
        padding: 0.5em;
        border-radius: 10px;
      }
      .buy {
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
      }
      .buy button {
    background-color: #ffffff;
    padding: 0.5em;
    font-weight:bold;
    border-radius:10px;
    border:none;
        }
    }
  `;
  const [active, setActive] = useState(true);
  const [locations, setLocatios]: any = useState([]);
  const [typePokemon, setTypePokemon] = useState([
    pokemon[0].data.sprites.front_default,
    pokemon[0].data.sprites.back_default,
  ]);
  useEffect(() => {
    fetch(pokemon[0].data.location_area_encounters)
      .then((res) => res.json())
      .then((data) => setLocatios(data));
  }, []);
  console.log(locations);
  function handleChangePokemon(state: boolean) {
    state
      ? setTypePokemon([
          pokemon[0].data.sprites.front_default,
          pokemon[0].data.sprites.back_default,
        ])
      : setTypePokemon([
          pokemon[0].data.sprites.front_shiny,
          pokemon[0].data.sprites.back_shiny,
        ]);
  }

  return (
    <Container>
      <div className="containerCard">
        <img
          src={typePokemon[active ? 0 : 1]}
          alt=""
          id="imgPoke"
          onMouseOut={() => {
            setActive(true);

            console.log("entro");
          }}
          onMouseOver={() => {
            setActive(false);

            console.log("salio");
          }}
        />

        <h3>{pokemon[0].data.name}</h3>

        <h4>Price:${pokemon[0].data.base_experience} </h4>
        <div className="container-radio">
          <button
            onClick={() => {
              handleChangePokemon(true);
            }}
          >
            Normal
          </button>
          <button
            onClick={() => {
              handleChangePokemon(false);
            }}
          >
            Shiny
          </button>
        </div>
        <div className="container-quantity">
          <label htmlFor="quantity">Quantity</label>{" "}
          <input id="quantity" type="number" value="1" />
        </div>
        <div className="buy">
          <button>Add cart</button>
        </div>
      </div>
      <div className="information">
        <h3>Information</h3>
        <b>id :</b>
        {pokemon[0].data.id}
        <b>Name :</b>
        {pokemon[0].data.name}
        <b>Type :</b> {pokemon[0].data.types.map((e: any) => e.type.name)}
        <b>Height :</b>
        {pokemon[0].data.height}
        <b>Species :</b>
        {pokemon[0].data.species.name}
        <b>Abilities :</b>
        <ul>
          {pokemon[0].data.abilities.map((e: any) => (
            <li>{e.ability.name} </li>
          ))}
        </ul>
        <b>Stats</b>
        <ul>
          {pokemon[0].data.stats.map((e: any) => (
            <li>
              <b>{e.stat.name}</b>:{e.base_stat}
            </li>
          ))}
        </ul>
        <b>Moves</b>
        <ul>
          {pokemon[0].data.moves.map((e: any) => (
            <li>{e.move.name}</li>
          ))}
        </ul>
        <b>Possible locations :</b>
        <ul>
          {locations.map((e: any) => (
            <li>{e.location_area.name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Pokemon;
