import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Catalogo() {

  const [movieList, setMovieList] = useState([]);

  const getMovieList = async () => {
    const data = await fetch(`https://spoilerzone-server.herokuapp.com/fire/catalog`);
    const items = await data.json();

    setMovieList(items);

  };

  
  useEffect(() => {
    getMovieList();
    // eslint-disable-next-line
  }, []);
  
  
  function getLetterArray(items, letter) {
    const getLetter = items.filter(item => item.titulo.slice(0,1) === letter);
    const letterArray = getLetter.map(item => {
      return <p key={item.id} className='movieLink'><Link to={`filme/${item.id}`}>{item.titulo} ({item.ano})</Link></p>
    })
    return letterArray;
  }

  function getCharArray(items) {
    const getChar = [];

    for (let i = 0; i < 10; i++) {
      const newChar = items.filter(item => item.titulo.slice(0,1) === i.toString());
      if (newChar[0] !== undefined) {
        newChar.forEach(item => getChar.push(item));
      }
    };

    const plusChar = items.filter(item => {
      return (
        item.titulo.slice(0,1) === '.' ||
        item.titulo.slice(0,1) === '(' ||
        item.titulo.slice(0,1) === '#' ||
        item.titulo.slice(0,1) === '.' ||
        item.titulo.slice(0,1) === '+' ||
        item.titulo.slice(0,1) === '-' ||
        item.titulo.slice(0,1) === '.' ||
        item.titulo.slice(0,1) === '&' ||
        item.titulo.slice(0,1) === '@' ||
        item.titulo.slice(0,1) === '$'
      )
    })

    if (plusChar[0] !== undefined) {
      plusChar.forEach(item => getChar.push(item));
    }

    const charArray = getChar.map(item => {
      return <p key={item.id} className='movieLink'><Link to={`filme/${item.id}`}>{item.titulo} ({item.ano})</Link></p>
    })
    return charArray;
  }


  return (
    <main className='Catalogo'>
      <h1>CATÁLOGO DE FILMES</h1>
      {movieList[0] ? <div>
        <p className='letterDiv'>#</p>
        {getCharArray(movieList)}
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
      </div> : <p className='letterDiv'>Site em manutenção</p>}
    </main>
  )
}