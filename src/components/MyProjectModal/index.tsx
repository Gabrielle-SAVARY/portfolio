import { MdClose } from 'react-icons/md';
import './styles.scss';
import { IMyProject } from '../../@types/dataMyProject';

interface MyProjectModalProps {
  setIsProjectModalOpen: (value: boolean) => void;
  projectDetails: IMyProject | null;
}

function MyProjectModal({ setIsProjectModalOpen, projectDetails }: MyProjectModalProps) {
  const handleMCloseModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsProjectModalOpen(false);
  };

  return (
    <div className="modal__overlay">
      {projectDetails !== null ? (
        <div className="modal__content">
          <div className="modal__content__header">
            <h4 className="modal__content__header__project-name">{projectDetails.name}</h4>
            <button type="button" className="modal__content__header__btn" onClick={(event) => handleMCloseModal(event)}>
              <MdClose
                size={46}
                className="modal__content__header__btn-icon--close-modal"
              />
            </button>
          </div>
          <div className="modal__content__body">
            <div className="modal__content__body__hero">
              <img className="modal__content__body__hero-image" src={projectDetails.imageLink} alt={projectDetails.name} />
            </div>

            <p>{projectDetails.legend}</p>
            <p>{projectDetails.description}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis quam laboriosam repellendus unde laudantium. Quia minus optio saepe eaque mollitia officia perferendis, quisquam dolor officiis quis laborum asperiores aut ullam! Consequatur est vel dicta harum ad, quod explicabo quibusdam facilis repellat consectetur saepe quaerat eum laboriosam soluta temporibus accusantium, nobis odio neque reiciendis molestias nulla! Nulla assumenda esse similique tenetur possimus odit, tempore exercitationem repellat fuga consectetur, iure enim, unde harum sit veritatis iusto? Molestias obcaecati necessitatibus dolore optio esse nesciunt voluptatem tempore libero quas nobis ex atque voluptas, voluptatibus dolorem incidunt eius. Eum nisi non aspernatur ratione et?</p>
          </div>
          {projectDetails.repoGithub.map((repo) => (
            <div key={repo.repoName} className="modal__content__footer">
              {repo.repoName}
            </div>
          ))}
        </div>
      ) : (
        <div className="modal__content__header">
          <div className="modal__content__header">
            <button type="button" className="modal__content__header__btn" onClick={(event) => handleMCloseModal(event)}>
              <MdClose
                size={46}
                className="modal__content__header__btn--close-modal"
              />
            </button>
          </div>
          <div className="modal__content__body">Une erreur est survenue</div>
        </div>
      )}

    </div>

  );
}

export default MyProjectModal;
