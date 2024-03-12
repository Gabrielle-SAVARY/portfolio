import CV from '../../assets/CV PORTFOLIO développeur web .pdf';
import diamondImg from '../../assets/images/gem-diamond.png';
import portraitImage from '../../assets/images/portrait-vintage.png';
import MyLink from '../MyLink';
import './styles.scss';

function About() {
  return (
    <section id="sectionAbout" className="section-about">
      <div className="about">
        <div className="about__header">
          <img className="about__header__img" src={portraitImage} alt="portrait de profil version animée d'une fille avec un caque audio" />
        </div>
        <div className="about__container">
          <h2 className="about__header__title">À propos</h2>
          <p className="about__container__text">
            <em className="font-accent__text"> Tout développeur &quot; senior&quot; a été un &quot;junior&quot; qui a pu monter en compétences et avoir de l'expérience en entreprise.</em>
          </p>
          <p className="about__container__text">
            Je suis à la recherche d'une opportunité professionnelle afin de m'insérer dans une équipe dynamique que ce soit en alternance ou en CDI.
          </p>
          <p className="about__container__text">
            Les compétences ne sont pas statiques, elles évoluent constamment. Bien qu'encore qu'à l'état brut, mes compétences, peuvent être façonnées et polies en entreprise.
          </p>
          <div className="about__container__links">
            <div className="about__container__links__contact-link">
              <img src={diamondImg} alt="dessin diamant" className="about__container__links__contact-link__img" />
              <MyLink
                label="me contacter"
                path="https://www.linkedin.com/in/gabrielle-savary/https://www.linkedin.com/in/gabrielle-savary/"
                target="_blank"
                classColor="link--primary"
                iconName="linkedin"
              />
            </div>
            <MyLink
              label="Télécharger mon cv"
              path={CV}
              target="_blank"
              classColor="link--secondary"
              iconName=""
            />
            <MyLink
              label="mon github"
              path="https://github.com/Gabrielle-SAVARY?tab=repositories"
              target="_blank"
              classColor="link--secondary"
              iconName="github"
            />
          </div>
        </div>
      </div>
      <div className="section-about__about-background-image" />
    </section>
  );
}

export default About;
