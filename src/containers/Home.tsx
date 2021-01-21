import React, { useContext } from "react";
import Products from "../components/Products";
import AppContext from "../context/AppContext";
import styled from "styled-components";
const Home = (): any => {
  const Container = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
  `;
  const data: any = useContext(AppContext);
  let allData = data.pokemons;
  return (
    <Container>
      {allData.map((e: any,index:number) => (
        <Products  key ={index } {...e} />
      ))}
    </Container>
  );
};

export default Home;
