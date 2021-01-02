import React from 'react'
import inceptionImg from '../assets/inception-spinning.png'
import TMDBLogo from '../assets/TMDB-logo.svg'

export default function About() {
  return (
    <main className='About'>
      <div className='leftSide'>
        <h1>SOBRE O SITE</h1>
        <p>Excepturi ut accusamus id. In est consequatur et nobis. Sit perferendis voluptates est.</p><br/>
        <p>Odit sed eaque quidem sint rerum aut. Dicta non ex ratione minus. Quod voluptatem assumenda quia vitae id provident repellat est. Rerum pariatur deserunt pariatur eligendi accusamus vitae. Voluptas possimus voluptate nobis ex nihil adipisci omnis. Quos debitis deleniti optio harum fuga voluptatem et nesciunt.</p><br/>
        <p>Eum error eius similique. Nisi id odio aut corrupti ut asperiores dolor. Quia vel et harum. Quis omnis occaecati alias id dolorum optio. Cupiditate id eos quo quia ab.</p><br/><br/>
        <p id='attribution'>Todos os posters, sinopses e informações técnicas dos filmes neste site utilizam o banco de dados do The Movie Databse como fonte.</p><br/>
        <img id='TMDBLogo' src={TMDBLogo} alt='The Movie Database Logo'></img>
      </div>
      <div className='rightSide'>
        <img src={inceptionImg} alt='Spoiler de Inception'/>
      </div>
    </main>
  )
}