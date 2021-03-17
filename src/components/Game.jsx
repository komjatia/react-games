import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'



export default function Game({name, image, released}) {
    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height:30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    border-radius: .4rem;
    text-align: center;
    img{
        width: 100%;
        height: 45vh;
        object-fit:cover;
    }
`;
