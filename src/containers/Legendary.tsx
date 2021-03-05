import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import PokemonCard from "../components/PokemonCard";
import { useParams } from "react-router";
import styled from "styled-components";
import { fireEvent } from "@testing-library/react";
function Legendary() {
  const Container = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    gap: 3em;
    display: flex;
    flex-wrap: wrap;
  `;
  const { id }: any = useParams();
  console.log(id);
  const { pokemons ,addToCart}: any = useContext(AppContext);
  console.log(pokemons);
  const legendary = [
    144,
    145,
    146,
    150,
    151,
    243,
    244,
    245,
    249,
    250,
    251,
    377,
    378,
    379,
    380,
    381,
    382,
    383,
    384,
    385,
    386,
    480,
    481,
    482,
    483,
    484,
    485,
    486,
    487,
    488,
    489,
    490,
    491,
    492,
    493,
    794,
    638,
    639,
    640,
    461,
    462,
    643,
    644,
    645,
    646,
    647,
    648,
    649,
    716,
    717,
    718,
    719,
    720,
    721,
    772,
    773,
    785,
    787,
    788,
    789,
    790,
    791,
    792,
    793,
    794,
    795,
    796,
    797,
    798,
    799,
    800,
    801,
    802,
    803,
    804,
    805,
    806,
    807,
    808,
    809,
    888,
    889,
    890,
    891,
    892,
    893,
    894,
    895,
    896,
   
  ];

 
  let pokemonsType :any=[]
  console.log(pokemonsType);
for (let index = 0; index < legendary.length; index++) {
  pokemonsType.push(pokemons[legendary[index]]);
  
}
console.log(pokemonsType)
  return (
    <Container>
       { 
      pokemonsType.map((e: any, index: number) => (
        <PokemonCard key={index} {...e} add={addToCart} />
      ))}
    </Container>
  );
}

export default Legendary;
