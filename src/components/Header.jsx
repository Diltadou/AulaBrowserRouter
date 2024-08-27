import React from 'react';
import '../global.css';
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <img src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="Steam Logo" />
        </div>
        <div className="logo2">
          <img src="https://seeklogo.com/images/N/Nintendo-logo-622559DD26-seeklogo.com.png" alt="Nintendo Logo" />
        </div>
        <div className="logo3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SEGA_logo.png/800px-SEGA_logo.png?20090713202303" alt="SEGA Logo" />
        </div>
        <div className="logo4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/XBOX_logo_2012.svg/2560px-XBOX_logo_2012.svg.png" alt="Xbox Logo" />
        </div>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/ofertas">Ofertas</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
