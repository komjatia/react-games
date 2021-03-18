import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import Redux
import { useDispatch } from "react-redux";
import { getGameDetail } from "../actions/DetailAction";
import { Link } from "react-router-dom";

import { resize } from "../resize";

export default function Game({ name, image, released, id }) {
  const dispatch = useDispatch();
  const loadDetailH = () => {
    document.body.style.overflow = "hidden";
    dispatch(getGameDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailH}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={resize(image)} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  overflow: hidden;
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  border-radius: 0.4rem;
  text-align: center;
  img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
  }
`;
