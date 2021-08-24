import React, { useContext, useEffect } from 'react'
import './App.css'
import {Store} from './Store'

function App():JSX.Element {
  const {episodes, dispatch} = useContext(Store)

  const fetchData = async () => {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes').then(data => data.json())
    return dispatch({type: 'FETCH_DATA', payload: data._embedded.episodes})
  }

  useEffect(() => {
    episodes.all.length === 0 && fetchData()
  })

  return (
    <>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode</p>
          {console.log(episodes)}
    </>
  )
}

export default App
