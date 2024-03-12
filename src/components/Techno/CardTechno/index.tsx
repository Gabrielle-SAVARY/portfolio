import './styles.scss';

interface CardTechnoProps {
  thumbnail: string;
  imgAlt: string;
  title: string;
}

function CardTechno({ thumbnail, imgAlt, title }: CardTechnoProps) {
  return (
    <div className="techno__card">
      <div className="techno__card__header">
        <img className="techno__card__header-img" src={thumbnail} alt={imgAlt} />
      </div>
      <div className="techno__card__content">
        <p className="techno__card__content-title">{title}</p>
      </div>
    </div>

  );
}
export default CardTechno;
