import React, { useContext, useEffect } from 'react'
import './App.css'
import { Store } from './Store'
import { Episode } from './interfaces'

function App(): JSX.Element {
  const { episodes, dispatch } = useContext(Store)

  const fetchData = async () => {
    const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=mirror&embed=episodes').then(data => data.json())
    return dispatch({ type: 'FETCH_DATA', payload: data._embedded.episodes })
  }

  fetchData()

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(episodes.favourites))
  }, [episodes])

  const toggleFavourite = (episode:Episode) => {
    const episodeInFavourites = episodes.favourites.some((favourite:Episode) => favourite.id === episode.id)
    return dispatch({ type: episodeInFavourites? 'REMOVE_FAV': 'ADD_FAV', payload: episode})
  }

  return (
    <>
      <header>
        <h1>Black mirror</h1>
        <p>Pick your favourite episodes</p>
      </header>

      <main>
        <ul className='episode-grid'>
          {episodes.all.map((episode:Episode) => (
            <li key={episode.id}>
              <img src={episode.image.medium} alt={`Black mirror episode ${episode.name}`} />
              <div className='episode-info'>
                <ul>
                  <li>{episode.name}</li>
                  <li>Season: {episode.season}</li>
                  <li>Number: {episode.number}</li>
                </ul>
                <button type='button' onClick={() => toggleFavourite(episode)}>{episodes.favourites.some((favourite:Episode) => favourite.id === episode.id)? '❤️' : '🖤'}</button>
              </div>
            </li>
          ))}
        </ul>
        <div className='favourites-sidebar'>
          <h2>Your favourites</h2>
          <ul>
            {episodes.favourites.map((episode:Episode) => (
              <li key={episode.id}>
                <img src={episode.image.medium} alt={`Black mirror episode ${episode.name}`} />
                <div className='favourite-info'>
                  <p>{episode.name}</p>
                  <button type='button' onClick={() => toggleFavourite(episode)}>{episodes.favourites.some((favourite:Episode) => favourite.id === episode.id)? '❤️' : '🖤'}</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
