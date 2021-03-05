import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import PokemonCard from "../components/PokemonCard";
import { useParams } from "react-router";
import styled from "styled-components";
function Habiliti() {
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
  const { pokemons ,addToCart }: any = useContext(AppContext);
  console.log(pokemons);
  let pokemonsType = pokemons.filter((pokemons: any) => {
    if (
      pokemons.data.abilities.filter((e: any) => e.ability.name == id).length >
      0
    ) {
      return pokemons;
    }
  });
  console.log(pokemonsType);


  return (
    <Container>
      {pokemonsType.map((e: any, index: number) => (
        <PokemonCard key={index} {...e} add={addToCart} />
      ))}
    </Container>
  );
}

export default Habiliti;
