import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function HeroSection() {
  let history = useHistory();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`search/${query}`);
  }

  return (
    <div className="HeroSection">
      <div className="hero-image">
        <div className="hero-text">
          <p>A VIDA É MUITO CURTA</p>
          <p>PARA ESPERAR O FINAL</p>
          <p>DO FILME</p>
          <form onSubmit={handleSubmit}>
            <input placeholder={'Pesquise um filme'} value={query} onChange={e => setQuery(e.target.value)} aria-label='Pesquise um filme' autoFocus required></input>
          </form>
        </div>
      </div>
    </div>
  );
}