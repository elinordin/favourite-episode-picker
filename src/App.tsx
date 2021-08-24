import React, { useContext, useEffect } from 'react'
import './App.css'
import { Store } from './Store'

function App(): JSX.Element {
  const { episodes, dispatch } = useContext(Store)

  const fetchData = async () => {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=mirror&embed=episodes').then(data => data.json())
    return dispatch({ type: 'FETCH_DATA', payload: data._embedded.episodes })
  }

  useEffect(() => {
    episodes.all.length === 0 && fetchData()
  })

  return (
    <>
      <h1>Black mirror</h1>
      <p>Pick your favourite episode</p>
      <ul className='episode-grid'>
        {episodes.all.map((episode:any) => (
          <li key={episode.id}>
            <img src={episode.image.medium} alt={`Black mirror episode ${episode.name}`} />
            <ul>
              <li>{episode.name}</li>
              <li>Season: {episode.season}</li>
              <li>Number: {episode.number}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
