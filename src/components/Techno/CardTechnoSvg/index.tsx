import LogoTechnoSvg from './LogoTechnoSvg';
import './styles.scss';

interface CardTechnoSvgProps {

  title: string;
}

function CardTechnoSvg({ title }: CardTechnoSvgProps) {
  return (
    <div className="technoSvg__card">
      <div className="technoSvg__card__header">
        <LogoTechnoSvg technoName={title} />
      </div>
      <div className="technoSvg__card__content">
        <p className="technoSvg__card__content-title">{title}</p>
      </div>
    </div>

  );
}
export default CardTechnoSvg;
