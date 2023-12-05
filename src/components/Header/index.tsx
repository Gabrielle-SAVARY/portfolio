import { useState } from 'react';
import BtnMenuMobile from './BtnMenuMobile';
import './styles.scss';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeMobileMenuIcon = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo"><a href="#/">GS.</a></div>
      <BtnMenuMobile
        changeMobileMenuIcon={changeMobileMenuIcon}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <nav className="header__navbar">
        <ul className="header__navbar__menu-links">
          <li><a href="#sectionHero">Accueil</a></li>
          <li><a href="#sectionFour">À propos</a></li>
          <li><a href="#sectionThree">Mes Projets</a></li>
          <li><a href="#sectionFive">Me contacter</a></li>
        </ul>
      </nav>
    </header>

  );
}

export default Header;
