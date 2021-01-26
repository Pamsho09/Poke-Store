import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/PokeStore.png";
function Header(): any {
  const [ability, setAbility]: any = useState([]);
  const [type, setType]: any = useState([]);
  const API = (url: string) => {
    return `https://pokeapi.co/api/v2/${url}`;
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

  const Header = styled.header`
    width: 100%;
    height: auto;
    background-color: #ee4444;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 23px 23px;
    img {
      width: 15%;
    }
    nav {
      width: 60%;
      justify-content: space-between;
      align-items: center;
    }
  `;
  const Menu = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      list-style: none;
    }
    .typeLi {
      border-radius: 10px;
      width: 10em;
      height: 2em;
      margin: 2em 1em;
      background-color: white;
      gap: 1em;
      display: grid;
      flex-direction: column;
      justify-content: center;
      font-family: Roboto;
      font-weight: bold;
    }
    .typeCart {
      border-radius: 10px;
      width: 2em;
      height: 2em;
      margin: 2em 1em;
      background-color: white;
      gap: 1em;
      display: grid;
      align-items: center;
      justify-content: center;
      font-family: Roboto;
      font-weight: bold;
    }
    h3 {
      border-radius: 10px;
      width: 10em;
      height: 2em;

      background-color: white;
      align-items: center;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: Roboto;
      font-weight: bold;
    }
    .typeLi:hover .secundario {
      margin-top: 2em;
      display: grid;
      position: absolute;
      gap: 1em;
      grid-template-columns: repeat(4, 1fr);
    }
    .secundario {
      display: none;
    }
    .linkType {
      display: none;
      color: #000;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 10px;
      width: 10em;
      height: 2em;
      box-shadow: 1px 1px rgba(0, 0, 0, 0.4);
      background-color: white;
      justify-content: space-between;
      align-items: flex-start;
      display: flex;
      justify-content: center;
      font-family: Roboto;
      font-weight: bold;
    }
    .search {
      width: 100%;
      display: flex;

      border-radius: 10px;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
    }

    .search input {
      width: 80%;
      border-radius: 10px;
      border: none;
      height: 2em;
      font-family: Roboto;
      outline: none;
    }
    .search button {
      width: 2em;
      height: 2em;
      border: none;
      outline: none;
      border-radius: 50%;
    }
  `;
  return (
    <Header>
      <img src={logo} alt="Logo pokestore" />
      <nav>
        <Menu>
          <li className="typeLi">
            <h3>Type pokemon</h3>
            <ul className="secundario">
              {type.map((e: any, index: number) => (
                <li key={index}>
                  <Link className="linkType" to={`/type/${e.name}`}>
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="typeLi">
            <h3>Hability</h3>
            <ul className="secundario">
              {ability.map((e: any, index: number) => (
                <li key={index}>
                  <Link className="linkType" to={`/hability/${e.name}`}>
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li className="typeLi">
            <h3>Generation</h3>
            <ul className="secundario">
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
          <li className="typeLi">
            <Link to="/legendary"><h3>Lengendary</h3></Link>
          </li>
          <li className="typeLi">
            <div className="search">
              {" "}
              <input type="text" />{" "}
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </li>
          <li className="typeCart">
            <i className="fas fa-shopping-cart"></i>
          </li>
        </Menu>
      </nav>
    </Header>
  );
}

export default Header;
