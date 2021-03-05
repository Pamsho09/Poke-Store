import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import AppContext from "../context/AppContext";
import { device } from "../assets/utils/device";
import styled from "styled-components";
import { link } from "fs";

function Pokemon() {
  const { pokemons ,addToCart}: any = useContext(AppContext);
  const { id }: any = useParams();
  let pokemon = pokemons.filter((e: any) => e.data.id == id);
  console.log(pokemon);
  const [typePokemon, setTypePokemon] = useState(true);
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2em;
      border-radius: 10px;
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

      .cardImg {
        width: 90%;
        border-radius: 10px;
        height: 295px;
        background-image: url(${typePokemon? pokemon[0].data.sprites.front_default: pokemon[0].data.sprites.front_shiny});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #ffffff;
      }
      .cardImg:hover {
        background-image: url(${typePokemon? pokemon[0].data.sprites.back_default: pokemon[0].data.sprites.back_shiny});
      }

      .containerCard h3,
      .containerCard h4 {
        text-transform: capitalize;
        font-size: xx-large;
      }
      .Quantity{

        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e6e6e6;
        border-radius:10px;
      }
      .Quantity span{
width:2em;
height:2em;
background:#fff;
font-weight:bold;
border-radius:10px;
display:flex;
justify-content:center;
align-items: center;
box-shadow:1px 1px rgba(0,0,0,0.5);

      }
      .Quantity span:hover{
        
        background:#757575;
        }
      .Quantity div{
width:4em;
height:2em;

font-weight:bold;
border-radius:10px;
display:flex;
justify-content:center;
align-items: center;


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
        width: 30%;
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
        font-weight: bold;
        border-radius: 10px;
        border: none;
      }

      .information {
        display: grid;

        grid-template-columns: 1fr ;
        border-radius: 10px;
        gap: 0.5em;
        width: 80%;
        padding: 0.5em;
        background-color: #ffffff;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        text-align: justify;
        box-shadow: 1px 1px  29px 1px rgba(0, 0, 0, 0.3);
        margin-bottom:1em;
      }
      .dataPokemon{

        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr ;

        gap:1em;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
      .dataPokemon li {list-style:none;}

      .movesContainer{
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
      }
      .containerMoves{
        display: flex;
        width:90%;
        flex-wrap:wrap;
        gap:0.1em;
justify-content:center;

      }
      .moves{
        padding:0.1em 0.5em  ;
        border-radius:10px;
      color:#fff;
      font-weight:bold;
        background-color: ${pokeTypes[pokemon[0].data.types[0].type.name]};}

        .containerLocations ,  .containerLocations li{
          width: 100%;
          text-align: center;
          justify-content: center;
          align-items:center;
          list-style:none;
        }
    }

  `;
const Stats=styled.div`
 width: 100%;
 display: grid;
 row-gap:0.5em;
 align-items: center;
 
.stat-Container{
justify-content:center;
align-items: center;

  width: 100%;
 display: grid;
 justify-content:center;
 align-items: center;
  grid-template-columns: 30% 70%;

}

.stat-Container b {
height:2.3em;
width:100%;
background-color: ${pokeTypes[pokemon[0].data.types[0].type.name]};
border-radius: 10px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
  color:#fff;
  text-transform:capitalize;
}
.stat-nav{
  width: 100%;
  height:1.5em;
  display: flex;
  align-items: center;
}
.stat-data{ 

  display: flex;
  justify-content:flex-end;
  height:1em;
  padding:0.25em;
  border-radius:0 10px 10px 0;
  background-color: #7de44d;
}


`
  
  const [locations, setLocatios]: any = useState([]);
const [quantityPokemons,setQuantityPokemons]: any = useState(0)
  useEffect(() => {
    fetch(pokemon[0].data.location_area_encounters)
      .then((res) => res.json())
      .then((data) => setLocatios(data));
  }, []);
  console.log(locations);
  function handleClickAdd(e:any){

    e.preventDefault();
    
    let pokemonAdd ={
      id:pokemon[0].data.id,
    name:pokemon[0].data.name,
    sprite:typePokemon? pokemon[0].data.sprites.front_default: pokemon[0].data.sprites.front_shiny,
    quantity:quantityPokemons,
    price:pokemon[0].data.base_experience,
    
    }

    addToCart(pokemonAdd)
      }
  return (
    <Container>
      <div className="containerCard">
        <div className="cardImg" />

        <h3>{pokemon[0].data.name}</h3>

        <h4>Price:${pokemon[0].data.base_experience} </h4>
        <div className="container-radio">
          <button
            onClick={() => {
              setTypePokemon(true);
            }}
          >
            Normal
          </button>
          <button
            onClick={() => {
              setTypePokemon(false);
            }}
          >
            Shiny
          </button>
        </div>
        <form onSubmit={handleClickAdd}>
          <div className="container-quantity">
            <label htmlFor="quantity">Quantity</label>{" "}
           <div className="Quantity">
          <span onClick={() => {
          
            setQuantityPokemons(quantityPokemons>0?quantityPokemons-1:0)
            
          }}>-</span> <div>{quantityPokemons}</div> <span onClick={() => {
            
            setQuantityPokemons(quantityPokemons+1)
           
          }}>+</span>
           </div>
          </div>
          <div className="buy">
            <button >Add cart</button>
          </div>
        </form>
      </div>
      <div className="information">
        <h3>Information</h3>
     <div className="dataPokemon">

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
     </div>

     <Stats className="statsPokemon">
     <h4>Stats</h4>
        
          {pokemon[0].data.stats.map((e: any) => (
            <div className='stat-Container'>
              <b>{e.stat.name}</b><div className='stat-nav'> <span className='stat-data' style={
                {
                  width:`${(e.base_stat/2).toString()}%`
                }
                } >{e.base_stat}</span > </div>
            </div>
          ))}
      



     </Stats>
      
       
       <div className='movesContainer'><h4>Moves</h4>
        <div className='containerMoves'>
          {pokemon[0].data.moves.map((e: any) => (
            <span className='moves'>{e.move.name}</span>
          ))}
        </div></div>
        
        <div className='containerLocations'>

        <b>Possible locations :</b>
        <ul>
          {locations.length>1?locations.map((e: any) => (
            <li>{e.location_area.name}</li>
          )):
          <h2>pokemon is not available</h2>
          }
        </ul>
        </div>
      </div>
    </Container>
  );
}

export default Pokemon;
