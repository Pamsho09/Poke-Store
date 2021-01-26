import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import PokemonCard from "../components/PokemonCard";
import { useParams } from "react-router";
import styled from "styled-components";
function Type() {
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
  const { pokemons }: any = useContext(AppContext);
  console.log(pokemons);

  let pokemonsType = pokemons.filter(
    (pokemon: any) => pokemon.data.types[0].type.name === id

  );
  console.log(pokemonsType);
  return (
    <Container>
      {pokemonsType.map((e: any, index: number) => (
        <PokemonCard key={index} {...e} />
      ))}
    </Container>
  );
}

export default Type;
