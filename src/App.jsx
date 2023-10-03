import { useState } from 'react'
import FilmBox from './containers/FilmBox'
import './App.css'

function App() {

  return (
    <>
      <div className='box'>
        <h1>Upcoming Film Releases for UK</h1>
        <hr></hr>
        <FilmBox/>
      </div> 
    </>
  )
}

export default App
