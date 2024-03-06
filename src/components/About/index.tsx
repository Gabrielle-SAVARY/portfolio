import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import CV from '../../assets/CV PORTFOLIO développeur web .pdf';
import diamondImg from '../../assets/images/gem-diamond.png';
import portraitImage from '../../assets/images/portrait-vintage.png';

import './styles.scss';

function About() {
  return (
    <section id="sectionAbout" className="section-about">
      <div className="section-about__scalopped-border-top" />
      <div className="about">
        <div className="about__header">
          <img className="about__header__img" src={portraitImage} alt="portrait de profil version animée d'une fille avec un caque audio" />
        </div>
        <div className="about__container">
          <h2 className="about__header__title">À propos</h2>
          <p className="about__container__text">
            <em> Tout développeur &quot; senior&quot; a été un &quot;junior&quot; qui a pu monter en compétences et avoir de l'expérience en entreprise.</em>
          </p>
          <p className="about__container__text">
            Je suis à la recherche d'une opportunité professionnelle afin de m'insérer dans une équipe dynamique que ce soit en alternance ou en CDI.
          </p>

          <p className="about__container__text">
            Les compétences ne sont pas statiques, elles évoluent constamment. Bien qu'encore qu'à l'état brut, mes compétences, peuvent être façonnées et polies en entreprise.
          </p>
          <div className="about__container__links">
            <a
              href={CV}
              className="link link--secondary"
              target="_blank"
              rel="noreferrer"
            >
              Télécharger mon CV
            </a>

            <a
              href="https://github.com/Gabrielle-SAVARY?tab=repositories"
              className="link link--secondary"
              target="_blank"
              rel="noreferrer"
            >
              mon github
              {' '}
              <AiFillGithub style={{ fontSize: '30px', color: 'inherit' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielle-savary/"
              className="link link--primary"
              target="_blank"
              rel="noreferrer"
            >
              me contacter
              {' '}
              <AiFillLinkedin style={{ fontSize: '30px', color: 'inherit' }} />
            </a>

          </div>
          <img src={diamondImg} alt="dessin diamant" className="about__container__img" />

        </div>
      </div>
      <div className="section-about__about-background-image" />

    </section>
  );
}

export default About;
