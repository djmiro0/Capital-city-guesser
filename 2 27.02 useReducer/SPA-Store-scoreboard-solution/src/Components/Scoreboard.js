import {useContext} from 'react';
import { ScoreContext } from '../Contexts/ScoreContext';

export default function Scoreboard() {
  const {score, plusScore, minusScore} = useContext(ScoreContext);
  return (
    <div>
    <h2>Your Current Score is <span className='score'>{score}</span></h2> 
    <button onClick={plusScore}>+</button>
    <button onClick={minusScore}>-</button>

    </div>
  )
}
