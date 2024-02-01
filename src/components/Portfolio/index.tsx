import { useEffect, useState } from 'react';
import MyProjects from '../MyProjects';
import { IMyProjects } from '../../@types/dataMyProjects';
import './styles.scss';

// TODO améliorer gestion erreur fetch

function Portfolio() {
  const [projectsList, setProjectsList] = useState<IMyProjects[]>([]);

  const getAllProjects = async () => {
    try {
      const response = await fetch('../../../myprojects.json');
      const data = await response.json();
      setProjectsList(data);
      console.log(data, 'data');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

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
