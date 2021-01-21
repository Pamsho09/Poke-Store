
import React ,{useEffect,useState} from "react";
import styled from 'styled-components'
function Products(props:any) {
const Poke= styled.div`
width:100%;

background-image: url(${props.data.sprites.front_default});
height:100px;
`

    return (
        < >
        
        <Poke />
        </>
        

            
        
    )
}

export default Products
