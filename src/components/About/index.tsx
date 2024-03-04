import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import CV from '../../assets/CV PORTFOLIO développeur web .pdf';
import diamondImage from '../../assets/images/diamond.png';
import portraitImage from '../../assets/images/portraitGS.png';

import './styles.scss';

function About() {
  return (
    <section id="sectionAbout" className="section-about">
      <div className="section-about__scalopped-border-top" />
      <h2 className="about-title">À propos</h2>
      <div className="about">
        <div className="about__image">
          <img className="about__image-portrait" src={portraitImage} alt="portrait de profil version animée d'une fille avec un caque audio" />
        </div>
        <div className="about__container">
          <p className="about__container__text">
            Je suis à la recherche d'opportunités professionnelles afin de m'insérer dans une équipe dynamique que ce soit en alternance ou en CDI.
          </p>
          <p className="about__container__text">
            Mon profil ne se conforme pas aux critères conventionnels que vous pourriez avoir en tant que recruteurs. Cependant, mon parcours témoigne de ma détermination et de ma passion pour ce métier que j'ai découvert au cours de mes précédentes études.
            Mes compétences actuelles et mon savoir être peuvent apporter une perspective enrichissante à votre équipe.
          </p>
          <p className="about__container__text">
            Ces même compétences ne sont pas figées dans le marbre, elles évoluent constamment. Bien qu'encore qu'à l'état brute, elles doivent être façonnées et polies en entreprise en accord avec vos attentes et besoins techniques.
            Ma capacité d'adaptation et ma soif d'apprendre me permettent de progresser rapidement.
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

        </div>
      </div>
      <div className="section-about__about-background-image" />

    </section>
  );
}

export default About;
