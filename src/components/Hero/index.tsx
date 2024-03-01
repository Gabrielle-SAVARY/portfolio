import { AiFillLinkedin } from 'react-icons/ai';
import HeroImg6 from '../../assets/images/background12-crop-miror.png';
import HeroImg7 from '../../assets/images/workspace-background.png';

import './styles.scss';

function Hero() {
  return (
    <section id="sectionHero" className="sectionOne">
      <div className="hero__container">
        <div className="presentation">
          <div className="presentation__heading">
            <h1 className="presentation__heading__title">
              Développeuse web
              <br />
              <em className="heading-font-accent">Javascript Fullstack</em>
            </h1>
          </div>
          <div className="presentation__texts">
            <p className="presentation__text__paragraph">
              Je m&apos;appelle Gabrielle Savary.
              Je travaille sur un environnement fullstack javascript avec React et Node.js.
              <br />
              <em>Je suis à la recherche d&apos;une alternance à partir de 2024</em>
            </p>
          </div>
          <div className="presentation__links">
            <a
              href="https://www.linkedin.com/in/gabrielle-savary/"
              className="link link--primary typography--link"
              target="_blank"
              rel="noreferrer"
            >
              me contacter
              {' '}
              <AiFillLinkedin style={{ fontSize: '26px', color: 'inherit' }} />
            </a>
            <button type="button"><a href="#sectionPortfolio" className="btn btn--secondary typography--btn">Mon portfolio</a></button>
          </div>
        </div>

        <div className="hero-img__container">
          <img className="hero-img__image" src={HeroImg7} alt="anime girl portrait with headphone" />
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1709141769">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
        </svg>
      </div>

    </section>
  );
}

export default Hero;
