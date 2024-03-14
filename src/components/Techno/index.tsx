import CardTechnoSvg from './CardTechnoSvg';
import './styles.scss';

function Techno() {
  return (
    <div className="cards-techno__container">
      <CardTechnoSvg title="javascript" />
      <CardTechnoSvg title="typescript" />
      <CardTechnoSvg title="react" />
      <CardTechnoSvg title="redux" />
      <CardTechnoSvg title="sass" />
      <CardTechnoSvg title="nodejs" />
      <CardTechnoSvg title="postgresql" />
      <CardTechnoSvg title="sequelize" />
    </div>
  );
}

export default Techno;
