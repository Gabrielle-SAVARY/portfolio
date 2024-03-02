import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import CV from '../../assets/CV PORTFOLIO développeur web .pdf';
import portraitImage from '../../assets/images/portraitGS.png';

import './styles.scss';

function About() {
  return (
    <section id="sectionAbout" className="sectionThree">
      <h2 className="section-title">À propos</h2>
      <div className="about">
        <div className="about__image">
          <img className="about__image-portrait" src={portraitImage} alt="portrait de profil version animée d'une fille avec un caque audio" />
        </div>
        <div className="about__container">
          <p className="about__container__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo illo nulla ullam eaque rem, aspernatur iure incidunt a eum voluptatum architecto corporis, atque officiis aliquam adipisci fugiat soluta quas!</p>
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
              <AiFillGithub style={{ fontSize: '26px', color: 'inherit' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielle-savary/"
              className="link link--primary"
              target="_blank"
              rel="noreferrer"
            >
              me contacter
              {' '}
              <AiFillLinkedin style={{ fontSize: '26px', color: 'inherit' }} />
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}

export default About;
