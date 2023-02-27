import {useContext} from 'react';
import { ScoreContext } from '../Contexts/ScoreContext';


export default function Infoboard() {
    const {score} = useContext(ScoreContext);
  return (
    <div>{score > 100 ? <h3>Good job!</h3> : <h3>"Let's make it over 100!"</h3>}</div>
  )
}
