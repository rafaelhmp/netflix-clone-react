import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      Feito com <span role="img" aria-label="heart">🤎</span> por 
      <a className="author" href="https://github.com/rafaelhmp" target="_blank"> Rafael Pacheco </a>       
      <br />
      Direitos de imagem para Netflix
      <br />
      Dados pegos pelo site Themoviedb.org
    </footer>
  );
};

export default Footer;
