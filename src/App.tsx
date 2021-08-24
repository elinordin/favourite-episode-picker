import React, { Fragment, useContext } from 'react'
import './App.css'
import {Store} from './Store'

function App():JSX.Element {
  const store = useContext(Store)

  return (
    <Fragment>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode</p>
          <p>Imported from my Store: {store}</p>
    </Fragment>
  )
}

export default App
