import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './styles/Body.module.css'

type Props = {
  filteredMovie: string,
  genreFilter: number | boolean
}

const baseURL = "https://api.themoviedb.org/"
const apiAuth = {
  headers : {
    Accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmJiNGFkYzdjM2QwMzI1NWNmYTM4YmFkMWNlNWFlYyIsInN1YiI6IjVmZjkyNzk2NjFiYWM0MDAzZmFhMGE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vjqhuqmr696IP638Hw8yE9jrBQ4QhmHCkvpYm3Uy1R8'
  },
}

const Body = (props: Props) => {
  const [discoverMovies, setDiscoverMovies] = useState([])
  
  useEffect(() => {
    axios.get(`${baseURL}3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, apiAuth)
    .then((response) => {
      const movies = response.data.results 
      setDiscoverMovies(movies)
    })
  }, [])

  const filterMovie = discoverMovies.filter((movie) => {
    if(props.genreFilter !== false) {
      return movie.genre_ids.includes(props.genreFilter)
    } else {
      return movie.title.toLowerCase().includes(props.filteredMovie.toLowerCase())
    }
  })

  return (
    <div className={ style.list }>
      {
         filterMovie.map((items) => (
          <div className={ style.movie }>
            <img src={`https://image.tmdb.org/t/p/w185${items.poster_path}`} alt="" />
            <h4>{items.title}</h4>
            <p>{items.release_date}</p>
            <p>{items.original_language}</p>
          </div>
        ))
      }




    </div>
  )
}

export default Body