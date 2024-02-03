import './styles.scss';

interface MyProjectProps {
  name: string;
  legend: string;
  projectImage: string;
}

function MyProject({ name, legend, projectImage }: MyProjectProps) {
  return (
    <article className="card">
      <div className="card__header">
        <img className="card__header__image" src={projectImage} alt={name} />
      </div>
      <div className="card__body">
        <h3 className="card__body__project-name">{name}</h3>
        <p className="card__body__project-legend">{legend}</p>
      </div>
    </article>
  );
}

export default MyProject;
