import './styles.scss';

interface MyProjectProps {
  id:number
  name: string;
  legend: string;
  projectImage: string;
}

function MyProject({
  id, name, legend, projectImage,
}: MyProjectProps) {
  return (
    <article className="card" id={`${id}-${name}`}>
      <div className="card__header">
        <img className="card__header__image" src={projectImage} alt={name} />
      </div>
      <div className="card__body">
        <h3 className="card__body__project-name">{name}</h3>
        <p className="card__body__project-legend">{legend}</p>
      </div>
      <div className="card__footer">
        <button type="button" className="card__footer__btn">btn</button>
      </div>
    </article>
  );
}

export default MyProject;
