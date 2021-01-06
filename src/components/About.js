import React from 'react'
import inceptionImg from '../assets/inception-spinning.png'
import TMDBLogo from '../assets/TMDB-logo.svg'

export default function About() {
  return (
    <main className='About'>
      <div className='leftSide'>
        <h1>SOBRE O SITE</h1>
        <p>Neste site você encontra informações sobre o enredo dos filmes enviados pelos próprios usuários.</p><br/>
        <p>Essa ideia surgiu da necessidade tanto de nos prepararmos para o que está por vir na trama quanto de consultarmos informações sobre filmes que já assistimos a tanto tempo que já esquecemos. Evite unhas roídas e lábios mordidos de tensão por não ter resolvido ainda o mistério do filme.</p><br/>
        <p>Para quem tem pavor de spoilers, <a href='https://www.universityofcalifornia.edu/news/spoiler-alert-spoilers-make-you-enjoy-stories-more' target='_blank' rel='noreferrer'>pesquisas e estudos</a> tem indicado que saber alguns spoilers antes de ver um filme tornam ele ainda mais prazeroso. Faça um teste! Leia os spoilers de algum filme e depois assista.</p><br/><br/>
        <p id='attribution'>Todos os posters, sinopses e informações técnicas dos filmes neste site utilizam o banco de dados do The Movie Databse como fonte.</p><br/>
        <img id='TMDBLogo' src={TMDBLogo} alt='The Movie Database Logo'></img>
      </div>
      <div className='rightSide'>
        <img src={inceptionImg} alt='Spoiler de Inception'/>
      </div>
    </main>
  )
}