import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction'

//import Styles and animations
import styled from 'styled-components'
import {motion} from 'framer-motion'

// import components
import Game from '../components/Game'

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames())
    }, [dispatch]);
    const {popular, newGames, upcomming} = useSelector((state) => state.games );

    //Styles
    const GamesList = styled(motion.div)`
        padding: 0 5rem;
        h2{
            padding: 5rem 0;
        }
    `;
    const Games= styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    `;
    return (
        <GamesList>
            <h2>Upcomming Games</h2>
            <Games>
                {upcomming.map(g => (
                    <Game name={g.name} released={g.released} id={g.id} image={g.background_image} key={g.id} />
                ))}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(g => (
                    <Game name={g.name} released={g.released} id={g.id} image={g.background_image} key={g.id} />
                ))}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map(g => (
                    <Game name={g.name} released={g.released} id={g.id} image={g.background_image} key={g.id} />
                ))}
            </Games>
        </GamesList>
    )
}
