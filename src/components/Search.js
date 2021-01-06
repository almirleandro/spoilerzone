import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import noImage185 from '../assets/no-image185.png';

export default function Search() {
  let history = useHistory();
  const [searchResult, setSearchResult] = useState([]);
  const [movieArray, setMovieArray] = useState([]);
  const [page, setPage] = useState(1);

  const { query } = useParams();
  const pesquisa = query;

  const getSearchResults = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=53d1ed1dbd54c7022b78b3f3b8a42342&language=pt-BR&query=${pesquisa}&page=${page}&include_adult=false`;
    
    try {
      const res = await fetch(url);
      const data  = await res.json();
      setSearchResult(data);
      setMovieArray(data.results);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getSearchResults();
    // eslint-disable-next-line
  }, [pesquisa, page]);


  const movieGrid = movieArray.map(item => {
    return <div className='movieBlock' key={item.id}>
      <div className='imgDiv'>
        <img src={item.poster_path ? 'https://image.tmdb.org/t/p/w185' + item.poster_path : noImage185} alt={item.title} onClick={() => history.push('/filme/' + item.id)} style={{cursor: 'pointer'}}/>
      </div>
      <div className='rightSide'>
        <h1 onClick={() => history.push('/filme/' + item.id)} style={{cursor: 'pointer'}}>{item.title}</h1>
        <p className='originalTitle'><b>Título original: </b>{item.original_title}</p>
        {item.release_date ? <p><b>Ano de lançamento: </b>{item.release_date.slice(0,4)}</p> : null}
      </div>
    </div>
  });

  return <div className='Search'>
    <main className='movieGrid'>{movieArray[0] ? movieGrid : <h1>Carregando filmes...</h1>}</main><br/>
    {searchResult.page ? <><div className='btnFlex'>
      <button onClick={() => setPage(page - 1)} style={searchResult.page === 1 ? {display: 'none'} : null}>Página anterior</button>
      <button onClick={() => setPage(page + 1)} style={searchResult.page === searchResult.total_pages ? {display: 'none'} : null}>Próxima página</button>
    </div><br/>
    <p id='pageCount'>{'Página ' + searchResult.page + ' de ' + searchResult.total_pages}</p></> : null}
  </div>
}