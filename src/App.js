import React, { useState } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

import About from './components/About'
import Catalogo from './components/Catalogo'
import Filme from './components/Filme'

import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom"

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [filmeID, setFilmeID] = useState('');

  return (
    <HashRouter basename='/'>
      <div className="App">
        <Switch>

          <Route path='/' exact>
            <Navbar />
            <HeroSection query={query} setQuery={setQuery} setMovies={setMovies} />
            <Footer />
          </Route>

          <Route path='/catalogo'>
            <Navbar />
            <Catalogo />
            <Footer />
          </Route>

          <Route path='/sobre'>
            <Navbar />
            <About />
            <Footer />
          </Route>

          <Route path={`/filme/:id`}>
            <Navbar />
            <Filme setFilmeID={setFilmeID} />
            <Footer />
          </Route>

        </Switch>
      </div>
    </HashRouter>
  );
}


