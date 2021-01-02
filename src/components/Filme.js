import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import firebase from '../firebase';

export default function Filme(props) {
  const [movieInfo, setMovieInfo] = useState();
  const [direction, setDirection] = useState();
  const [streamers, setStreamers] = useState();
  const [spoilersDB, setspoilersDB] = useState([]);

  // Get url path
  const { id } = useParams();
  const filmeID = id;
  
  // Get spoilers from database
  const ref = firebase.firestore().collection("moviespoilersdb");
  const getSpoilers = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
          items.push(doc.data());
      });
      
      const DBinfo = items.filter(item => item.id === filmeID);

      if (DBinfo[0] === undefined) { // Tentar lembrar por que eu coloquei esse if aqui (lembrei: foi para poder exibir páginas que ainda não têm spoilers (ainda dá para melhorar))
        console.log('Filme não contém spoilers no banco de dados');
      } else {
        setspoilersDB(DBinfo[0].spoilers);
      }
    });
  }

  // API calls
  const getMovie = async () => {    
    const url = `https://api.themoviedb.org/3/movie/${filmeID}?api_key=53d1ed1dbd54c7022b78b3f3b8a42342&language=pt-BR`;
    
    try {
      const res = await fetch(url);
      const data  = await res.json();
      setMovieInfo(data);
      // console.log(data);
    }catch(err){
      console.error(err);
    }
  }
  const getDirector = async () => {    
    const url = `https://api.themoviedb.org/3/movie/${filmeID}/credits?api_key=53d1ed1dbd54c7022b78b3f3b8a42342&language=en-US`;
    
    try {
      const res = await fetch(url);
      const data  = await res.json();

      const directorsArray = data.crew.filter(item => item.job === 'Director');
      const directorsName = directorsArray.map((item, index) => {
        if (directorsArray.length > 1 && index + 1 === directorsArray.length) {
          return 'e ' + item.name;
        } else if (index + 1 === directorsArray.length - 1) {
          return item.name + ' ';
        } else if (index + 1 < directorsArray.length) {
          return item.name + ', ';
        } else {
          return item.name;
        }
      });

      setDirection(directorsName);
      // console.log(directorsName);
    }catch(err){
      console.error(err);
    }
  }
  const getStreaming = async () => {    
    const url = `https://api.themoviedb.org/3/movie/${filmeID}/watch/providers?api_key=53d1ed1dbd54c7022b78b3f3b8a42342`;
    
    try {
      const res = await fetch(url);
      const data  = await res.json();

      const streamersArray = data.results.BR.flatrate;
      const BRStream = streamersArray.map((item, index) => {
        if (streamersArray.length > 1 && index + 1 === streamersArray.length) {
          return 'e ' + item.provider_name;
        } else if (index + 1 === streamersArray.length - 1) {
          return item.provider_name + ' ';
        } else if (index + 1 < streamersArray.length) {
          return item.provider_name + ', ';
        } else {
          return item.provider_name;
        }
      });

      setStreamers(BRStream);
      // console.log(BRStream);
    }catch(err){
      console.error(err);
    }
  }

  // Call them any time the url changes (and at first render)
  useEffect(() => {
    getMovie();
    getDirector();
    getStreaming();
    getSpoilers();
    props.setFilmeID(filmeID);
  }, [filmeID]);

  // Put the spoiler in a JSX format
  const spoilersArray = spoilersDB.map(item => {
    return <p key={item.key}><b>{item.pergunta}</b> {item.text}</p>
  });

  return (
    <main className='Filme'>
      {movieInfo ? <div className='movieHeader'>
        <img src={'https://image.tmdb.org/t/p/w342' + movieInfo.poster_path} alt={spoilersDB.titulo}/>
        <div className='movieDescription'>
          <h1>{movieInfo.title} ({movieInfo.release_date.slice(0,4)})</h1>
          {movieInfo.tagline ? <p id='tagline'><em>"{movieInfo.tagline}"</em></p> : null}
          <p><b>Título original:</b> {movieInfo.original_title}</p>
          <p><b>Direção:</b> {direction}</p>
          <p><b>Sinopse:</b> {movieInfo.overview ? movieInfo.overview : 'Não disponível'}</p>
          <p><b>Disponível para streaming no Brasil em:</b> {streamers ? streamers : 'Não disponível'}</p>
        </div>
      </div> : null}
      <div className='spoilerDivision'>Spoilers a seguir</div>
      <div className='spoilers'>
        {spoilersArray}
      </div>
    </main>
  )
}