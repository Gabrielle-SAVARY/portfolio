import React, { useEffect, useState } from 'react';
import CardProject from '../CardProject';
import { IMyProject } from '../../@types/dataMyProject';
import './styles.scss';

// TODO améliorer gestion erreur fetch

function Portfolio() {
  // Liste des projets
  const [projectsList, setProjectsList] = useState<IMyProject[]>([]);

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
          <CardProject
            key={project.id}
            myProject={project}
          />
        ))}

        <CardProject
          myProject={
          {
            id: 3,
            name: 'Projet 3',
            description: 'Description du projet 3',
            technologies: [''],
            imageLink: '',
            githubLink: '',
            demoLink: '',
          }
        }

        />
      </div>
    </section>
  );
}

export default Portfolio;
