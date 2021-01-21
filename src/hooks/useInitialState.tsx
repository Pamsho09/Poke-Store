import { useState, useEffect } from "react";
import initialState from "../initialState";
import axios from "axios";
function useInitialState(): any {
  const api = "";
  const [state, setState] = useState(initialState);
  const [pokemons, setPokemons]: any[] = useState([]);
  //   async function dataRes() {
  //     let multiApi: any = [];
  //     let res = await axios("https://pokeapi.co/api/v2/pokemon?limit=802");
  //     let urls = res.data.results;
  //     for (let i = 0; i < urls.length; i++) {
  //       axios.get(urls[i].url).then((res: any) => {

  //         setPokemons([...pokemons,res.data])
  //         console.log(pokemons)
  //       });
  //     }

  //  ;
  //   }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=802")
      .then((res): any => res.data.results)
      .then((results) => {
        return Promise.all(results.map((e: { url: string; }) => axios.get(e.url)));
      })
      .then((results): any => {
      setPokemons(results)
       
      });
  }, []);

  // const addToCart:any = (payload: never) => {
  //   setState({
  //     ...state,
  //     cart: [...state.cart, payload],
  //   });
  // };

  // const removeFromCart:any = (payload: never, indexToRemove: number) => {
  //   setState({
  //     ...state,
  //     cart: state.cart.filter(
  //       (_item, indexCurrent) => indexCurrent !== indexToRemove
  //     ),
  //   });
  // };
  // const addToBuyer:any = (payload: never) => {
  //   setState({
  //     ...state,
  //     buyer: [...state.buyer, payload],
  //   });
  // };
  // const addNewOrder:any = (payload: never) => {
  //   setState({ ...state, order: [...state.order, payload] });
  // };

  return { state, pokemons };
}

export default useInitialState;
