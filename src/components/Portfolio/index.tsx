import React, { useEffect, useState } from 'react';
import MyProject from '../MyProject';
import MyProjectModal from '../MyProjectModal';
import { IMyProject } from '../../@types/dataMyProject';
import './styles.scss';

// TODO améliorer gestion erreur fetch

function Portfolio() {
  const [projectsList, setProjectsList] = useState<IMyProject[]>([]);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  console.log('STATE', isProjectModalOpen);

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
        {projectsList.map((project) => (
          <MyProject
            key={project.id}
            name={project.name}
            legend={project.legend}
            projectImage={project.imageLink}
            setIsProjectModalOpen={setIsProjectModalOpen}
          />
        ))}

        <MyProject name="Projet 3" legend="" projectImage="" setIsProjectModalOpen={setIsProjectModalOpen} />

        {isProjectModalOpen && (
        <MyProjectModal />)}
      </div>

    </section>
  );
}

export default Portfolio;
