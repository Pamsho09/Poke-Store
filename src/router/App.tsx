import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import Home from "../containers/Home";
import loading from "../assets/img/loading.gif";
import Layout from "../components/Layout";
import Type from "../containers/Type";
import Hability from "../containers/Hability";
import Generation from "../containers/Generation";
import Legendary from "../containers/Legendary";
import styled from "styled-components";
import Pokemon from "../containers/Pokemon";
const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
background-color: #fff;
flex-direction:column;
gap:1em;
  img {
    width: 100%;
  }

  h2 {
    text-align: center;
    width: 100%;
    font-weight: bold;
  }
`;
function App(): any {
  const initialState = useInitialState();

  const isEmpty = initialState.pokemons.length;

  console.log(isEmpty);
  return (
    <>
      {isEmpty >= 1 ? (
        <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/type/:id" component={Type} />
                <Route exact path="/hability/:id" component={Hability} />
                <Route exact path="/pokemon/:id" component={Pokemon} />
                <Route exact path="/legendary" component={Legendary} />
                <Route exact path="/generation" component={Generation} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <Loading>
          {" "}
          <img src={loading} />
          <h2>Loading ...</h2>
        </Loading>
      )}
    </>
  );
}

export default App;
