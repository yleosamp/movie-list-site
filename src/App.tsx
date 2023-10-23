import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'

function App() {
  const [filteredMovie, setFilter] = useState('')
  const [genreFilter, setGenreFilter] = useState(false)

  return (
    <>
      <Header setFilter={ setFilter } setGenreFilter={ setGenreFilter } />  
      <Body filteredMovie={ filteredMovie } genreFilter={ genreFilter } />
    </>
  )
}

export default App
