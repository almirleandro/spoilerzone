import React, { Suspense } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import ScrollToTop from './ScrollToTop'

import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom"

const HeroSection = React.lazy(() => import('./components/HeroSection'));
const About = React.lazy(() => import('./components/About'));
const Catalogo = React.lazy(() => import('./components/Catalogo'));
const Filme = React.lazy(() => import('./components/Filme'));
const Search = React.lazy(() => import('./components/Search'));

export default function App() {

  return (
    <HashRouter basename='/'>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Switch>
          <Suspense fallback={<div style={{height: '93vh'}}></div>}>
            <Route path='/' exact>
              <HeroSection />
            </Route>

            <Route path='/catalogo'>
              <Catalogo />
            </Route>

            <Route path='/sobre'>
              <About />
            </Route>

            <Route path='/filme/:id'>
              <Filme />
            </Route>

            <Route path='/search/:query'>
              <Search />
            </Route>
          </Suspense>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}


