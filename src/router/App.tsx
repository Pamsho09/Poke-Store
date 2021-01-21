import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import Home from "../containers/Home";
import loading from "../assets/img/loading.gif";
function App() :any {
  const initialState = useInitialState();

const isEmpty = initialState.pokemons.length;
console.log(isEmpty)
  return (
   <>
   {isEmpty >=802?( <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>):
    <img src={loading}/>
    }
   
   </>
  );
}

export default App;
