import portfolioLogo from '../../assets/images/portfolio-logo.png';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__logo-portfolio" src={portfolioLogo} alt="logo du portfolio avec initiales" />
        <div className="footer__logo-social-media" />
      </div>
    </footer>

  );
}

export default Footer;
