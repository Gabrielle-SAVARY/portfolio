import { AiFillGithub } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import imgProject_Porfolio from '../../../assets/images/project_portofolio_logo-white.png';
import imgProject_PoxedexRetroJS from '../../../assets/images/project_pokedex-retro-js_homepage_desktop.png';
import imgProject_Quizotron from '../../../assets/images/project_quizotron_homepage_desktop.png';
import { IMyProject } from '../../../@types/dataMyProject';

import './styles.scss';

interface CardProjectProps {
  myProject: IMyProject;
}

function CardProject({
  myProject: {
    id, name, description, technologies, githubLink, demoLink,
  },
}: CardProjectProps) {
  // Affiche l'image du projet - utilisé car problème avec liens des img et fetch + gh-pages
  const cardImage = (cardName: string) => {
    switch (cardName) {
      case 'Portfolio':
        return imgProject_Porfolio;
      case 'Pokédex rétro JS':
        return imgProject_PoxedexRetroJS;
      case 'QuizOtron':
        return imgProject_Quizotron;
      default:
        return '#';
    }
  };
  return (
    <article className="card" id={`${id}-${name}`}>
      <div className="card__header">
        <img className="card__header__image" src={cardImage(name)} alt={name} />
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

        {demoLink && demoLink !== '' ? (
          <a
            href={demoLink}
            className="card__footer__link card__footer__link__demo"
            target="_blank"
            rel="noreferrer"
          >
            demo
            <FaPlay style={{ fontSize: '18px', color: 'inherit' }} />
          </a>
        )
          : null}

      </div>
    </article>

  );
}

export default CardProject;
