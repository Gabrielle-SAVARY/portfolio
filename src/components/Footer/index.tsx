import portfolioLogo from '../../assets/images/Logo-portfolio_white.png';
import SocialMedia from '../SocialMedia';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="/portfolio">
          <img className="footer__container__logo" src={portfolioLogo} alt="logo du portfolio avec initiales" />
        </a>
        <div className="footer__container__social-media">
          <SocialMedia mediaName="linkedin" mediaLink="https://www.linkedin.com/in/gabrielle-savary/" mediaIconColor="white" />
          <SocialMedia mediaName="github" mediaLink="https://github.com/Gabrielle-SAVARY?tab=repositories" mediaIconColor="white" />
        </div>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-text">© 2023 Gabrielle Savary</p>
        <p className="footer__copyright-text">
          Crédit éléments d&apos;image accueil -
          {' '}
          <a href="https://fr.freepik.com/vecteurs-libre/dessin-main-style-original_1322923.htm#fromView=search&page=1&position=12&uuid=e78ce822-6526-44f7-ae31-72606b4c941a" target="_blank" rel="noreferrer">Designed by Freepik.com</a>
        </p>
      </div>
    </footer>

  );
}

export default Footer;
