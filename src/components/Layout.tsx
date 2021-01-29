import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components'


const Block = styled.div`
width: 100%;
height: 4em;
`
function Layout({ children }:any){
  return (
    <>
      <Header />
      <Block/>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
