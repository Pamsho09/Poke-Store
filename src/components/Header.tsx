import React, { useState, useEffect, useMemo, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { device } from "../assets/utils/device";
import pokeball from "../assets/img/pokeball.svg";
const Header = styled.header`
  @media ${device.movile} {
    width: 100%;
    z-index:1111111111111111;
    position: fixed;
    background-color: #ee4444;
    display: flex;
    height: 4em;

    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 23px 23px;
a{
  color: #000;
}
    nav {
      width: 100%;
      display: flex;

      justify-content: center;
      align-items: center;
    }
  } /*
  width: 100%;

  background-color: #ee4444;
  display: flex;
  height: 4em;

  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 23px 23px;
  img {
    width: 15%;
  }
  nav {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
  } */
`;
const Menu = styled.div`
  @media ${device.movile} {
    display: flex;
    width: 4em;
    flex-direction: column-reverse;
    align-items: center;
    position: fixed;
    bottom: 10px;
    margin-right: 40px;
    right: 10px;
    
    .poke-menu {
      width: 4em;
      height: 4em;
      
    }
    :hover .menu {
      display: flex;
    }

    li {
      list-style: none;
    }
    a {
      color: #000;

      text-decoration: none;
    }
    ul {
      display: flex;
      flex-direction: column-reverse;
    }
    .menu {
      display: none;
      gap: 1em;
    }

    h3 {
      text-align: center;
      padding: 0.5em;
      display: flex;
      justify-self: center;
      justify-content: center;
      background-color: #fff;
    }
    .sub-opcions {
      display: none;
    }
    .menu-opcions {
      box-shadow: 1px 1px  29px 1px rgba(0, 0, 0, 0.3);
      background-color: #d8d8d8;
    }
    .menu-opcions,
    h3 {
      font-family: "Roboto";
      text-align: center;
      border-radius: 10px;
      height: auto;
      max-height: 10em;
      overflow: hidden;
    }
    .menu-opcions:hover .sub-opcions,
    h3 {
      align-items: center;
      font-weight: bold;
      gap: 10px;

      height: auto;
      max-height: 6em;
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      box-shadow: 10px 1px #3d3d3d;
    }
  }
`;
const Search = styled.div`
  @media ${device.movile} {
    width: 70%;
    position: relative;
    background-color: #fff;

    display: block;
    

    border-radius: 50px;

    .search {
      width: 100%;
      display: flex;
      border-radius: 10px;
      height: 2em;
      justify-content: space-between;

      align-items: center;
    }

    .search input {
      width: 100%;
      text-align: center;
      font-size: 15px;
      border-radius: 50px;
      border: none;
      height: 1em;
      font-family: Roboto;
      outline: none;
    }
    .search .icon i {
      font-size: 9px;
margin-right:1em;
      color: #575757;

      border: none;
      outline: none;
    }
    .search-data {
      display: none;
    }
    &:hover .search-data {
      display: flex;
      flex-direction: column;
      z-index: 11111111111111;
      position: absolute;
      height: auto;
      max-height: 25em;
      width: 100%;
      border-radius: 10px;
      overflow-y: scroll;
      overflow-x: hidden;
      font-weight:bold;
      background-color: #fff;
      gap: 10px;
    }
    .search-data a {
      font-family: roboto;
      color: #000;
      text-align: center;
      text-decoration: none;
      padding: 10px 20px;
    }
    .search-data a:hover {
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

function Heade(): any {
  const { pokemons,state }: any = useContext(AppContext);
  const [search, setSearch] = useState("");

  const [ability, setAbility]: any = useState([]);
  const [type, setType]: any = useState([]);
  const API = (url: string) => {
    return `https://pokeapi.co/api/v2/${url}`;
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    fetch(API("type/"))
      .then((response): any => response.json())
      .then((data): any => setType(data.results));
  }, []);
  useEffect(() => {
    fetch(API("ability/"))
      .then((response): any => response.json())
      .then((data): any => setAbility(data.results));
  }, []);

  const filterPokemon: any = useMemo(
    () =>
      pokemons.filter((e: any) => {
        return e.data.name.toLowerCase().includes(search.toLowerCase());
      }),
    [pokemons, search]
  );

  let quantity :number =0
state.cart.map((e: any)=>{
  quantity+=e.quantity
})

  
  return (
    <Header>
      <nav>
        <Search className="container-search">
          <div className="search">
            <input type="text" value={search} onChange={handleSearch} />
            <div className="icon">
              {" "}
              <i className="fas fa-search" />
            </div>
          </div>

          <div className="search-data">
            {filterPokemon.map((e: any) => (
              <Link
                to={{
                  pathname: `/pokemon/${e.data.id}`,
                  
                }}
              >
                {e.data.name}
              </Link>
            ))}
          </div>
        </Search>
        <Menu>
          <img className="poke-menu" src={pokeball} alt="" />
          <ul className="menu">
            <li className="menu-opcions">
              <h3>Type pokemon</h3>
              <ul className="sub-opcions">
                {type.map((e: any, index: number) => (
                  <li key={index}>
                    <Link className="linkType" to={`/type/${e.name}`}>
                      {e.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="menu-opcions">
              <h3>Hability</h3>
              <ul className="sub-opcions">
                {ability.map((e: any, index: number) => (
                  <li key={index}>
                    <Link className="linkType" to={`/hability/${e.name}`}>
                      {e.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="menu-opcions">
              <h3>Generation</h3>
              <ul className="sub-opcions">
                <li>
                  <Link
                    className="linkType"
                    to={{
                      pathname: `/generation`,
                      state: {
                        limitGenetatio: [1, 151],
                      },
                    }}
                  >
                    FIRST
                  </Link>
                </li>
                <li>
                  <Link
                    className="linkType"
                    to={{
                      pathname: `/generation`,
                      state: {
                        limitGenetatio: [152, 251],
                      },
                    }}
                  >
                    SECOND
                  </Link>
                </li>
                <li>
                  <Link
                    className="linkType"
                    to={{
                      pathname: `/generation`,
                      state: {
                        limitGenetatio: [252, 386],
                      },
                    }}
                  >
                    {" "}
                    THIRD
                  </Link>
                </li>
                <li>
                  <Link
                    className="linkType"
                    to={{
                      pathname: `/generation`,
                      state: {
                        limitGenetatio: [387, 494],
                      },
                    }}
                  >
                    {" "}
                    QUARTER
                  </Link>
                </li>
                <li>
                  <Link
                    className="linkType"
                    to={{
                      pathname: `/generation`,
                      state: {
                        limitGenetatio: [495, 649],
                      },
                    }}
                  >
                    {" "}
                    FIFTH
                  </Link>
                </li>
                <li>
                  <Link
                    className="linkType"
                    to={{
                      pathname: `/generation`,
                      state: {
                        limitGenetatio: [650, 721],
                      },
                    }}
                  >
                    {" "}
                    SIXTH
                  </Link>
                </li>
                <li>
                  <Link
                    className="linkType"
                    to={{
                      pathname: `/generation`,
                      state: {
                        limitGenetatio: [722, 809],
                      },
                    }}
                  >
                    {" "}
                    SEVENTH
                  </Link>
                </li>
                <li>
                  <Link
                    className="linkType"
                    to={{
                      pathname: `/generation`,
                      state: {
                        limitGenetatio: [810, 897],
                      },
                    }}
                  >
                    {" "}
                    EIGHTH
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-opcions">
              <Link to="/legendary">
                <h3>Lengendary</h3>
              </Link>
            </li>

            <li className="menu-opcions">
              <h3>
               <Link to="/cart"><i className="fas fa-shopping-cart"> <span>{quantity}</span></i></Link>
               
                
              </h3>
            </li>
          </ul>
        </Menu>
      </nav>
    </Header>
  );
}

export default Heade;
