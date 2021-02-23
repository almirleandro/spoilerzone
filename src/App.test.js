// app.test.js
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import App from './App'

window.scrollTo = jest.fn();

describe('Navbar', () => {
  test('"Sobre o site" link points to the correct page', async () => {
    render(<App />, { wrapper: BrowserRouter })

    const container = document.querySelector('.rightSide');
    const link = within(container).getByRole('link', { name: /sobre o site/i });
    
    userEvent.click(link);
    await screen.findByRole('heading', { name: /sobre o site/i });
  })

  test('"Catálogo de filmes" link points to the correct page', async () => {
    render(<App />, { wrapper: BrowserRouter })

    const container = document.querySelector('.rightSide');
    const link = within(container).getByRole('link', { name: /Catálogo de filmes/i });
    
    userEvent.click(link);
    await screen.findByRole('heading', { name: /CATÁLOGO DE FILMES/i });
  })

  test('"Spoiler Zone" link points to home page', async () => {
    render(<App />, { wrapper: BrowserRouter })

    const container = document.querySelector('.leftSide');
    const link = within(container).getByRole('link', { name: /Spoiler Zone/i });
    
    userEvent.click(link);
    const hero = document.querySelector('.HeroSection');
    expect(hero).toBeInTheDocument()
  })

  afterAll(() => {
    jest.clearAllMocks();
  });
});

describe('Sidenav', () => {
  test('"Sobre o site" link points to the correct page', async () => {
    render(<App />, { wrapper: BrowserRouter })

    const container = document.querySelector('.sidenav');
    const link = within(container).getByRole('link', { name: /sobre o site/i });
    
    userEvent.click(link);
    await screen.findByRole('heading', { name: /sobre o site/i });
  })

  test('"Catálogo de filmes" link points to the correct page', async () => {
    render(<App />, { wrapper: BrowserRouter })

    const container = document.querySelector('.sidenav');
    const link = within(container).getByRole('link', { name: /Catálogo de filmes/i });
    
    userEvent.click(link);
    await screen.findByRole('heading', { name: /CATÁLOGO DE FILMES/i });
  })

  afterAll(() => {
    jest.clearAllMocks();
  });
});