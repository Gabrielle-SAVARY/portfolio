import portfolioLogo from '../../assets/images/portfolio-logo.png';
import SocialMedia from '../SocialMedia';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__logo-portfolio" src={portfolioLogo} alt="logo du portfolio avec initiales" />
        <div className="footer__logo-social-media">
          <SocialMedia mediaName="linkedin" mediaLink="#" mediaIconColor="white" />
          <SocialMedia mediaName="github" mediaLink="#" mediaIconColor="white" />
        </div>
      </div>
    </footer>

  );
}

export default Footer;
