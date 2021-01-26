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
  const data: any = useContext(AppContext);
  let allData = data.pokemons;
  console.log(allData)
  return (
    <Container>
      {allData.map((e: any,index:number) => (
        <PokemonCard  key ={index } {...e} />
      ))}
    </Container>
  );
};

export default Home;
