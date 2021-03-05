import React, { useContext } from "react";
import PokemonCard from "../components/PokemonCard";
import AppContext from "../context/AppContext";
import styled from "styled-components";

const Home = (): any => {
  const Container = styled.div`
    width: 100%;
    height: auto;
justify-content: center;
gap:3em;
    display: flex;
flex-wrap:
wrap;
  `;
  const {pokemons,addToCart}:any = useContext(AppContext);
 
  return (
    <Container>
      {pokemons.map((e: any,index:number) => (
        <PokemonCard  key ={index } {...e} add={addToCart} />
      ))}
    </Container>
  );
};

export default Home;
