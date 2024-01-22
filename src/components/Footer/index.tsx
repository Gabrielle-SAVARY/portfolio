import portfolioLogo from '../../assets/images/portfolio-logo.png';
import SocialMedia from '../SocialMedia';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <a href="/">
          <img className="footer__logo-portfolio" src={portfolioLogo} alt="logo du portfolio avec initiales" />
        </a>
        <div className="footer__logo-social-media">
          <SocialMedia mediaName="linkedin" mediaLink="https://www.linkedin.com/in/gabrielle-savary/" mediaIconColor="white" />
          <SocialMedia mediaName="github" mediaLink="https://github.com/Gabrielle-SAVARY?tab=repositories" mediaIconColor="white" />
        </div>
      </div>
      <div className="footer__copyright">
        <p className="footer__copyright-text">© 2023 Gabrielle Savary</p>
      </div>
    </footer>

  );
}

export default Footer;
