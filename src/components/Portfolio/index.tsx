import MyProjects from '../MyProjects';
import './styles.scss';

function Portfolio() {
  return (
    <section id="sectionPortfolio" className="sectionTwo">
      <h2>MES PROJETS</h2>
      <div className="portfolio__container">
        <MyProjects title="Projet 1" backgroundHero="" />
        <MyProjects title="Projet 2" backgroundHero="" />
        <MyProjects title="Projet 3" backgroundHero="" />
      </div>

    </section>
  );
}

export default Portfolio;
