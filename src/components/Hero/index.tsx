import HeroBackgroundImg from '../../assets/images/workspace-background.png';
import PlanteBackground from '../../assets/images/plante.jpg';
import MyLink from '../MyLink';
import Techno from '../Techno';
import './styles.scss';

function Hero() {
  return (
    <section id="sectionHero" className="sectionOne">
      <div className="hero__container">
        <img src={PlanteBackground} alt="plante en pot suspendue" className="hero__container__img-plante-background" />
        <div className="presentation">
          <div className="presentation__heading">
            <h1 className="presentation__heading__title heading-gradient">
              Développeuse web
              <br />
              <em className="font-accent__heading">Javascript Fullstack</em>
            </h1>
          </div>
          <div className="presentation__texts">
            <p className="presentation__text__paragraph">
              Je m&apos;appelle
              {' '}
              <em className="font-accent__text">Gabrielle Savary</em>
              {' '}
              et je travaille sur un environnement fullstack javascript.
            </p>
            {/* <p className="presentation__text__paragraph">
              <em className="font-accent__text">Je suis à la recherche d&apos;une opportunité professionnelle en alternance ou en CDI.</em>
            </p> */}
          </div>
          <div className="presentation__links">
            <MyLink
              label="me contacter"
              path="https://www.linkedin.com/in/gabrielle-savary/"
              target="_blank"
              classColor="link--primary"
              iconName="linkedin"
            />
            <MyLink
              label="Voir mes projets"
              path="#sectionPortfolioProjects"
              target=""
              classColor="link--secondary"
              iconName=""
            />
          </div>
        </div>

        <div className="hero-img__container">
          <img className="hero-img__image" src={HeroBackgroundImg} alt="anime girl portrait with headphone" />
        </div>
      </div>
      <Techno />
      <div className="custom-shape-divider-bottom-1709141769">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
        </svg>
      </div>

    </section>
  );
}

export default Hero;
