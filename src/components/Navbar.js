import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
  const [menuStyle, setMenuStyle] = React.useState({
    width: '0'
  })

  const closeMenu = () => setMenuStyle({width: '0'});

  
  return (
    <nav className="Navbar">
      <div className='leftSide'>
        <Link exact={true} to="/">Spoiler Zone</Link>
      </div>
      <div className='rightSide'>
        <Link to="/catalogo">Catálogo de filmes</Link>
        <Link to="/sobre">Sobre o site</Link>
      </div>
      <div id="mySidenav" className="sidenav" style={menuStyle}>
        <button className="closebtn" onClick={closeMenu}>&times;</button>
        <Link to="/catalogo" onClick={closeMenu}>Catálogo de filmes</Link>
        <Link to="/sobre" onClick={closeMenu}>Sobre o site</Link>
      </div>
      <i className="fas fa-bars fa-2x" onClick={() => setMenuStyle({width: '250px'})}></i>
    </nav>
  );
}