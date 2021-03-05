import React, { useContext } from "react";
import PokemonCard from "../components/PokemonCard";
import AppContext from "../context/AppContext";
import styled from "styled-components";

const Generation = (props: any): any => {
  console.log();
  const Container = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    gap: 3em;
    display: flex;
    flex-wrap: wrap;
  `;
  const limit: number[] = props.history.location.state.limitGenetatio;
  const { pokemons ,addToCart}: any = useContext(AppContext);
  let allData = pokemons.filter((e: any) => {
    if (e.data.id >= limit[0] && e.data.id <= limit[1] ) {
      return true;
    }
  });
  console.log(allData);

  return (
    <Container>
      { allData.map((e: any,index:number) => (
        <PokemonCard  key ={index } {...e} add={addToCart} />
      ))}
    </Container>
  );
};

export default Generation;
