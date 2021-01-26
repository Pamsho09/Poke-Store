
import React ,{useEffect,useState} from "react";
import styled from 'styled-components'
function Products(props:any) {
const Poke= styled.div`
width:15em;
height:20em;
border-radius:23px;
background-color: #fff;
box-shadow:1px 1px  rgba(0,0,0,0.3);
background-image: url(${props.data.sprites.front_default});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
`

    return (
        < >
        
        <Poke >


        </Poke>
        </>
        

            
        
    )
}

export default Products
