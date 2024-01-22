import { useState } from 'react';
import BtnMenuMobile from './BtnMenuMobile';
import SocialMedia from '../SocialMedia';
import portfolioLogo from '../../assets/images/portfolio-logo.png';
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
      <a href="/"><img className={classnameHeaderLogo} src={portfolioLogo} alt="logo du portfolio avec initiales" /></a>
      <BtnMenuMobile
        changeMobileMenuIcon={changeMobileMenuIcon}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <nav className={classnameHeaderNavbar}>
        <ul className="header__navbar__menu-links">
          <li><a href="#sectionMyProjects">portfolio</a></li>
          <li><a href="#sectionAbout">À propos</a></li>
          <li><div className="header__navbar__menu-links__separator" /></li>
          <li><SocialMedia mediaName="linkedin" mediaLink="#" mediaIconColor="white" /></li>
          <li><SocialMedia mediaName="github" mediaLink="#" mediaIconColor="white" /></li>
          <li>
            <button type="button"><a href="#sectionContact" className="btn btn--primary typography--btn">me contacter</a></button>
          </li>
        </ul>

      </nav>
    </header>

  );
}

export default Header;
