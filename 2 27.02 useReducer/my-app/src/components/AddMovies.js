import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export default function AddMovies() {
    const {myVar} = useContext(UserContext);
  return (
    <div>
    {myVar}
    add AddMovies
    </div>
  )
}
