import { useState } from 'react';
import BtnMenuMobile from './BtnMenuMobile';
import './styles.scss';

function Header() {
  // State du toogle menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Change le state du toogle menu mobile
  const changeMobileMenuIcon = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Logique nom des classe CSS en fonction du toogle menu mobile
  const classnameHeader = isMobileMenuOpen ? 'header--open' : 'header';
  const classnameHeaderLogo = isMobileMenuOpen ? 'header__logo--open' : 'header__logo';
  const classnameHeaderNavbar = isMobileMenuOpen ? 'header__navbar--open' : 'header__navbar';

  return (
    <header className={classnameHeader}>
      <div className={classnameHeaderLogo}><a href="#/">GS.</a></div>
      <BtnMenuMobile
        changeMobileMenuIcon={changeMobileMenuIcon}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <nav className={classnameHeaderNavbar}>
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
