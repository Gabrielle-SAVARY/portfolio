import './styles.scss';

interface MyProjectProps {
  name: string;
  legend: string;
  projectImage: string;
  setIsProjectModalOpen: (value: boolean) => void;
}

function MyProject({
  name, legend, projectImage, setIsProjectModalOpen,
}: MyProjectProps) {
  const handleMOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsProjectModalOpen(true);
  };

  return (
    <article className="card">
      <div className="card__header">
        <img className="card__header__image" src={projectImage} alt={name} />
      </div>
      <div className="card__body">
        <h3 className="card__body__project-name">{name}</h3>
        <p className="card__body__project-legend">{legend}</p>
      </div>
      <div className="card__footer">
        <button type="button" className="card__footer__btn-open-modal" onClick={(event) => handleMOpenModal(event)}>En savoir plus</button>
      </div>
    </article>
  );
}

export default MyProject;
