import diamondImg from '../../assets/images/gem-diamond.png';
import portraitImage from '../../assets/images/portrait-vintage.png';
import MyLink from '../MyLink';
import './styles.scss';

function About() {
  return (
    <section id="sectionAbout" className="section-about">
      <div className="about">
        <div className="about__img-container">
          <img className="about__img-container__img" src={portraitImage} alt="portrait de profil version animée d'une fille avec un caque audio" />
        </div>
        <div className="about__infos-container">
          <h2 className="about__infos-container__title">À propos</h2>
          <div className="about__infos-container__paragraph">
            <h3 className="about__infos-container__paragraph__title heading-gradient">Mon parcours</h3>
            <p className="about__infos-container__text">
              En bref, j&apos;ai décidé de
              {' '}
              <em className="font-accent__text">troquer l&apos;application code du travail pour coder des applications web</em>
              .
            </p>
            <div className="about__infos-container__paragraph__timeline">
              <h4 className="about__infos-container__paragraph__timeline-date heading-gradient">2015</h4>
              <p className="about__infos-container__text">J&apos;ai découvert le développement web en autodidacte pendant mes études en ressources humaines.</p>
            </div>
            <div className="about__infos-container__paragraph__timeline">
              <h4 className="about__infos-container__paragraph__timeline-date heading-gradient">Décembre 2022</h4>
              <p className="about__infos-container__text">
                Je décide de me reconvertir pour continuer ce qui m&apos;avait passionnée.
                <br />
                Grâce à une formation de 6 mois chez O&apos;clock j'ai acquis un socle de compétences en développement javascript.
              </p>
            </div>
            <div className="about__infos-container__paragraph__timeline">
              <h4 className="about__infos-container__paragraph__timeline-date heading-gradient">Octobre 2023</h4>
              <p className="about__infos-container__text">
                <em className="font-accent__text">J&apos;obtiens mon titre de Développeur Web et Mobile</em>
                {' '}
                après être passée devant un jury de professionnels.
              </p>
            </div>
          </div>
          <div className="about__infos-container__paragraph">
            <h3 className="about__infos-container__paragraph__title heading-gradient">Mon objectif en 2024</h3>
            <p className="about__infos-container__text">
              Je souhaite apporter mon dynamisme au sein d&apos;une équipe qui me permettra de continuer à évoluer.
            </p>
            <p className="about__infos-container__text">
              Les compétences ne sont pas statiques, elles évoluent constamment.
              <br />
              Bien qu&apos;encore à l&apos;état brut,
              {' '}
              <em className="font-accent__text">mes compétences vont être façonnées et polies en entreprise</em>
              .
            </p>
          </div>
          <div className="about__infos-container__paragraph">
            <h3 className="about__infos-container__paragraph__title-contact heading-gradient"> Si vous êtes intéréssé par mon profil, échangeons ensemble sur linkedin.</h3>
          </div>
          <div className="about__infos-container__links">
            <div className="about__infos-container__links__contact-link">
              <img src={diamondImg} alt="dessin diamant" className="about__infos-container__links__contact-link__img" />
              <MyLink
                label="me contacter"
                path="https://www.linkedin.com/in/gabrielle-savary/"
                target="_blank"
                classColor="link--primary"
                iconName="linkedin"
              />
            </div>
            <MyLink
              label="Télécharger mon cv"
              path="https://drive.google.com/file/d/1jjuhRfdskOkPJ3IXLeNMgEBuMR6mSugf/view?usp=drive_link"
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
