import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//import Styles and animations
import { motion } from "framer-motion";
import styled from "styled-components";
import { resize } from "../resize";

export default function GameDetail() {
  const history = useHistory();
  const { screenshot, detail, isLoading } = useSelector(
    (state) => state.detail
  );
  const exitDetailHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  return (
    <>
      {!isLoading && (
        <StyledGameDetail className='shadow' onClick={exitDetailHandler}>
          <StyledDetail>
            <StyledStats>
              <div className='rating'>
                <h3>{detail.name}</h3>
                <p>Rating: {detail.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatform>
                  {detail.platforms.map((d) => (
                    <h3 key={d.platform.id}>{d.platform.name}</h3>
                  ))}
                </StyledPlatform>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img src={detail.background_image} alt='image' />
            </StyledMedia>
            <StyledDescription>
              <p>{detail.description_raw}</p>
            </StyledDescription>
            <div className='galery'>
              {screenshot.results.map((s) => (
                <img src={s.image} alt={s.id} key={s.id} />
              ))}
            </div>
          </StyledDetail>
        </StyledGameDetail>
      )}
    </>
  );
}
const StyledGameDetail = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;
const StyledDetail = styled(motion.div)`
  width: 60%;
  border-radius: 1rem;
  padding: 2rem 2rem;
  background: white;
  position: absolute;
  top: 3%;
  left: 20%;
  color: black;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatform = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  img {
    margin-left: 3rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0;
`;
