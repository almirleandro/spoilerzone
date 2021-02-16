import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import noImage185 from '../assets/no-image185.png';

export default function Search() {
  let history = useHistory();
  const [searchResult, setSearchResult] = useState({});
  const [movieArray, setMovieArray] = useState([]);
  const [page, setPage] = useState(1);

  const { query } = useParams();
  const pesquisa = query;

  const getSearchResults = async () => {
    try {
      const res = await fetch(`https://spoilerzone-server.herokuapp.com/tmdb/search`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          pesquisa: pesquisa,
          page: page
        })
      });
      const data  = await res.json();
      setSearchResult(data);
      setMovieArray(data.results);
    } catch(err) {
      console.error(err);
    }

    window.scrollTo(0, 0);
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

  const noResults = <div className='noResults'>
    <h1>Nenhum filme encontrado</h1>
    <p id='noResultsText'>Verifique a escrita do título do filme e tente novamente</p>
  </div>

  return <div className='Search'>
    <main className='movieGrid'>{searchResult.page === undefined ? <h1>Carregando filmes...</h1> : searchResult.total_pages === 0 ? noResults : movieGrid}</main><br/>
    {searchResult.page === undefined ? null : searchResult.total_pages === 0 ? null : <><div className='btnFlex'>
      <button onClick={() => setPage(page - 1)} style={searchResult.page === 1 ? {display: 'none'} : null}>Página anterior</button>
      <button onClick={() => setPage(page + 1)} style={searchResult.page === searchResult.total_pages ? {display: 'none'} : null}>Próxima página</button>
    </div><br/>
    <p id='pageCount'>{'Página ' + searchResult.page + ' de ' + searchResult.total_pages}</p></>}
  </div>
}