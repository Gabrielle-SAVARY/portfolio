import { AiFillLinkedin } from 'react-icons/ai';
import HeroImg from '../../assets/images/bg-pc-vert.png';
import HeroImg2 from '../../assets/images/coding-amico_storyset.png';
import HeroImg3 from '../../assets/images/bg-pc-vert-removebg.png';
import HeroImg4 from '../../assets/images/image17 - Copie.png';
import HeroImg5 from '../../assets/images/image17.png';
import HeroImg6 from '../../assets/images/background12-crop-miror.png';

import './styles.scss';

function Hero() {
  return (
    <section id="sectionHero" className="sectionOne">
      <div className="presentation">
        <div className="presentation__heading">
          <p className="presentation__heading__hello">
            Bonjour, je suis Gabrielle SAVARY,
          </p>
          <h1 className="presentation__heading__title">
            Développeuse web
            {' '}
            <em>React/Fullstack</em>
          </h1>
        </div>
        <div className="presentation__texts">
          <p className="presentation__text__paragraph">
            Je travaille sur un environnement fullstack javascript avec React et Node.js.
            <br />
            <em>Je suis à la recherche d&apos;une alternance à partir de 2024</em>
          </p>
          <p className="presentation__text__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, autem veritatis fugit quam enim amet facere eaque similique minima sint consectetur optio, ipsum exercitationem, consequuntur blanditiis! Nam similique blanditiis maxime?
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
        <img className="hero-img__image" src={HeroImg6} alt="anime girl portrait with headphone" />
      </div>

    </section>
  );
}

export default Hero;
