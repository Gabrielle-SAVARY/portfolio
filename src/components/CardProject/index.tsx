import { AiFillGithub } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { IMyProject } from '../../@types/dataMyProject';

import './styles.scss';

interface CardProjectProps {
  myProject: IMyProject;
}

function CardProject({
  myProject: {
    id, name, description, technologies, imageLink, githubLink, demoLink,
  },
}: CardProjectProps) {
  return (
    <article className="card" id={`${id}-${name}`}>
      <div className="card__header">
        <img className="card__header__image" src={imageLink} alt={name} />
      </div>
      <div className="card__body">
        <h3 className="card__body__project-name">{name}</h3>
        <div className="card__body__project-technologies">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="card__body__project-technologies__tag"
            >
              {technology}
            </span>
          ))}

        </div>
        <p className="card__body__project-description">{description}</p>
      </div>
      <div className="card__footer">
        <a
          href={githubLink}
          className="card__footer__link card__footer__link__code"
          target="_blank"
          rel="noreferrer"
        >
          code
          <AiFillGithub style={{ fontSize: '24px', color: 'inherit' }} />
        </a>
        <a
          href={demoLink}
          className="card__footer__link card__footer__link__demo"
          target="_blank"
          rel="noreferrer"
        >
          demo
          <FaPlay style={{ fontSize: '18px', color: 'inherit' }} />
        </a>
      </div>
    </article>
  );
}

export default CardProject;
