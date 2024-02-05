import React, { useEffect, useState } from 'react';
import MyProject from '../MyProject';
import MyProjectModal from '../MyProjectModal';
import { IMyProject } from '../../@types/dataMyProject';
import './styles.scss';

// TODO améliorer gestion erreur fetch

function Portfolio() {
  // Liste des projets
  const [projectsList, setProjectsList] = useState<IMyProject[]>([]);
  // Vérifie si la modale du projet est ouverte
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);
  // Id du projet à afficher dans la modale
  const [projectIdModalOpen, setProjectIdModalOpen] = useState<number>(0);

  const [projectDetailModal, setProjectDetailModal] = useState<IMyProject | null>(null);

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

  const handleFilterProjectModal = (allProjects: IMyProject[], projectId: number) => {
    const projectFiltered = allProjects.filter((project) => project.id === projectId);
    setProjectDetailModal(projectFiltered[0]);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  useEffect(() => {
    if (projectIdModalOpen !== 0) handleFilterProjectModal(projectsList, projectIdModalOpen);
  }, [projectIdModalOpen, projectsList]);

  return (
    <section id="sectionPortfolio" className="sectionTwo">
      <h2>MES PROJETS</h2>
      <div className="portfolio__container">
        {projectsList.map((project) => (
          <MyProject
            key={project.id}
            id={project.id}
            name={project.name}
            legend={project.legend}
            projectImage={project.imageLink}
            setIsProjectModalOpen={setIsProjectModalOpen}
            setProjectIdModalOpen={setProjectIdModalOpen}
          />
        ))}

        <MyProject
          id={3}
          name="Projet 3"
          legend=""
          projectImage=""
          setIsProjectModalOpen={setIsProjectModalOpen}
          setProjectIdModalOpen={setProjectIdModalOpen}
        />

        {isProjectModalOpen && (
        <MyProjectModal
          setIsProjectModalOpen={setIsProjectModalOpen}
          projectDetails={projectDetailModal}
        />
        )}
      </div>

    </section>
  );
}

export default Portfolio;
