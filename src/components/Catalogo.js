import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import firebase from '../firebase';

export default function Catalogo() {

  const [movieList, setMovieList] = useState([]);

  const ref = firebase.firestore().collection("moviespoilersdb");
  const getMovieList = () => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
          items.push(doc.data());
      });

      setMovieList(items);

    });
  };

  
  useEffect(() => {
    getMovieList();
  }, []);
  
  
  function getLetterArray(items, letter) {
    const getLetter = items.filter(item => item.titulo.slice(0,1) === letter);
    const letterArray = getLetter.map(item => {
      return <p key={item.id} className='movieLink'><Link to={`filme/${item.id}`}>{item.titulo} ({item.ano})</Link></p>
    })
    return letterArray;
  }


  return (
    <main className='Catalogo'>
      <h1>CATÁLOGO DE FILMES</h1>
      {movieList[0] ? <div>
        <p className='letterDiv'>A</p>
        {getLetterArray(movieList, 'A')}
        <p className='letterDiv'>B</p>
        {getLetterArray(movieList, 'B')}
        <p className='letterDiv'>C</p>
        {getLetterArray(movieList, 'C')}
        <p className='letterDiv'>D</p>
        {getLetterArray(movieList, 'D')}
        <p className='letterDiv'>E</p>
        {getLetterArray(movieList, 'E')}
        <p className='letterDiv'>F</p>
        {getLetterArray(movieList, 'F')}
        <p className='letterDiv'>G</p>
        {getLetterArray(movieList, 'G')}
        <p className='letterDiv'>H</p>
        {getLetterArray(movieList, 'H')}
        <p className='letterDiv'>I</p>
        {getLetterArray(movieList, 'I')}
        <p className='letterDiv'>J</p>
        {getLetterArray(movieList, 'J')}
        <p className='letterDiv'>K</p>
        {getLetterArray(movieList, 'K')}
        <p className='letterDiv'>L</p>
        {getLetterArray(movieList, 'L')}
        <p className='letterDiv'>M</p>
        {getLetterArray(movieList, 'M')}
        <p className='letterDiv'>N</p>
        {getLetterArray(movieList, 'N')}
        <p className='letterDiv'>O</p>
        {getLetterArray(movieList, 'O')}
        <p className='letterDiv'>P</p>
        {getLetterArray(movieList, 'P')}
        <p className='letterDiv'>Q</p>
        {getLetterArray(movieList, 'Q')}
        <p className='letterDiv'>R</p>
        {getLetterArray(movieList, 'R')}
        <p className='letterDiv'>S</p>
        {getLetterArray(movieList, 'S')}
        <p className='letterDiv'>T</p>
        {getLetterArray(movieList, 'T')}
        <p className='letterDiv'>U</p>
        {getLetterArray(movieList, 'U')}
        <p className='letterDiv'>V</p>
        {getLetterArray(movieList, 'V')}
        <p className='letterDiv'>W</p>
        {getLetterArray(movieList, 'W')}
        <p className='letterDiv'>X</p>
        {getLetterArray(movieList, 'X')}
        <p className='letterDiv'>Y</p>
        {getLetterArray(movieList, 'Y')}
        <p className='letterDiv'>Z</p>
        {getLetterArray(movieList, 'Z')}
      </div> : <p className='letterDiv'>Carregando filmes...</p>}
    </main>
  )
}