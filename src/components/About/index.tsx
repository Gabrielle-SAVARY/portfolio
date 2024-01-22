import portraitImage from '../../assets/images/image-portrait.png';
import './styles.scss';

function About() {
  return (
    <section id="sectionAbout" className="sectionThree">
      <h2 className="section-title">À propos</h2>
      <div className="about">
        <div className="about__image">
          <img className="about__image-portrait" src={portraitImage} alt="portrait de profil version animée d'une fille avec un caque audio" />
        </div>
      </div>

    </section>
  );
}

export default About;
