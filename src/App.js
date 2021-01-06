import React from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

import About from './components/About'
import Catalogo from './components/Catalogo'
import Filme from './components/Filme'
import Search from './components/Search'

import ScrollToTop from './ScrollToTop'

import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom"

export default function App() {

  return (
    <HashRouter basename='/'>
      <ScrollToTop />
      <div className="App">
        <Switch>

          <Route path='/' exact>
            <Navbar />
            <HeroSection />
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

          <Route path='/filme/:id'>
            <Navbar />
            <Filme />
            <Footer />
          </Route>

          <Route path='/search/:query'>
            <Navbar />
            <Search />
            <Footer />
          </Route>

        </Switch>
      </div>
    </HashRouter>
  );
}


