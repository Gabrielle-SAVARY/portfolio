import { useEffect, useState } from 'react';
import CardProject from './CardProject';
import { IMyProject } from '../../@types/dataMyProject';
import './styles.scss';

function PortfolioProjects() {
  // Liste des projets
  const [projectsList, setProjectsList] = useState<IMyProject[]>([]);

  const getAllProjects = async () => {
    try {
      const response = await fetch('../../myprojects.json');
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
    <section id="sectionPortfolioProjects" className="portfolio-projects">
      <h2>Mes projets</h2>
      <div className="portfolio-projects__container">
        {projectsList.map((project) => (
          <CardProject
            key={project.id}
            myProject={project}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioProjects;
