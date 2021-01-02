import React from 'react'

export default function HeroSection({ query, setQuery, setMovies }) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting");
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=53d1ed1dbd54c7022b78b3f3b8a42342&language=pt-BR&query=${query}&page=1&include_adult=false`;
    
    try {
      const res = await fetch(url);
      const data  = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div className="HeroSection">
      <div className="hero-image">
        <div className="hero-text">
          <p>A VIDA É MUITO CURTA</p>
          <p>PARA ESPERAR O FINAL</p>
          <p>DO FILME</p>
          <form onSubmit={handleSubmit}>
            <input placeholder={/**'Pesquise um filme'*/ 'Função pesquisar ainda em construção'} value={query} onChange={e => setQuery(e.target.value)}></input>
          </form>
        </div>
      </div>
    </div>
  );
}