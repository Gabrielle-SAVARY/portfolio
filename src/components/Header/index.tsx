import { useState } from 'react';
import BtnMenuMobile from './BtnMenuMobile';
import SocialMedia from '../SocialMedia';
import portfolioLogo from '../../assets/images/Logo-portfolio_primary.png';
import gemsMobile from '../../assets/images/gems-mobile.png';
import './styles.scss';

function Header() {
  // State du toogle menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
      <a href="/">
        <img className={classnameHeaderLogo} src={portfolioLogo} alt="logo du portfolio avec initiales" />
      </a>
      <BtnMenuMobile
        changeMobileMenuIcon={changeMobileMenuIcon}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <nav className={classnameHeaderNavbar}>
        <ul className="header__navbar__menu-links">
          <li><a href="#sectionPortfolioProjects" className="header__navbar__menu-links__link" onClick={handleCloseMobileMenu}>Mes projets</a></li>
          <li><a href="#sectionAbout" className="header__navbar__menu-links__link" onClick={handleCloseMobileMenu}>À propos</a></li>
          <li><div className="header__navbar__menu-links__separator" /></li>
          <li>
            <div className="header__navbar__menu-links__social-media">
              <SocialMedia mediaName="linkedin" mediaLink="https://www.linkedin.com/in/gabrielle-savary/" mediaIconColor="primary" handleCloseMobileMenu={handleCloseMobileMenu} />
              <SocialMedia mediaName="github" mediaLink="https://github.com/Gabrielle-SAVARY?tab=repositories" mediaIconColor="primary" handleCloseMobileMenu={handleCloseMobileMenu} />
            </div>
          </li>
          { isMobileMenuOpen && (
          <li className="header__navbar--open__menu-links__img-container">
            <img src={gemsMobile} alt="gemmes scintillantes" className="header__navbar--open__menu-links__img-container__img" />
          </li>
          )}
        </ul>

      </nav>
    </header>

  );
}

export default Header;
