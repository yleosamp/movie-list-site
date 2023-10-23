import React, { useState } from 'react'
import style from './styles/Header.module.css'
import axios from 'axios'


type Props = {
  setFilter: Function,
  setGenreFilter: Function
}


const Header = (props: Props) => {
  const [showGenreMenu, setGenreMenu] = useState(false)

  return (
    <div>
      <header className={ style.header }>
        <tr>
          <td><a href="/">Home</a></td>
          <td className={ style.generos }
            onClick={ () => setGenreMenu(!showGenreMenu) }
            //onMouseLeave={ () => setGenreMenu(false)  }
            >
            <i className='material-icons'>arrow_downward</i>Gêneros
          </td>
          <td>Em alta</td>
        </tr>
        <div>
          <i className="material-icons">search</i>
          <input type="text" name="searchMovie" placeholder='Pesquise um filme' onChange={ (e) => props.setFilter(e.currentTarget.value)} />
        </div>
      </header>
      { showGenreMenu 
        ? (
          <div className={ style.glow }>
            <div className={ style.genreMenu }>
              <a onClick={ () => props.setGenreFilter(28) }>Ação</a>
              <a onClick={ () => props.setGenreFilter(35) }>Comédia</a>
              <a onClick={ () => props.setGenreFilter(27) }>Terror</a>
            </div>
          </div>
      ) : ''
      }

    </div>
  )
}

export default Header