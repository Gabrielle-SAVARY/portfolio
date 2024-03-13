import CardTechno from './CardTechno';
import logoJs from '../../assets/images/techno_logo/stack_javascript.png';
import logoTypescript from '../../assets/images/techno_logo/stack_typeScript.png';
import logoReact from '../../assets/images/techno_logo/stack_react.png';
import logoSass from '../../assets/images/techno_logo/stack_sass.png';
import logoNode from '../../assets/images/techno_logo/stack_nodeJs.png';
import logoPostgreSQL from '../../assets/images/techno_logo/stack_postgreSQL.png';
import logoSequelize from '../../assets/images/techno_logo/stack_sequelize.png';
import waves from '../../assets/images/techno-background2.png';

import './styles.scss';

function Techno() {
  return (
    <section id="sectionTechno" className="techno">
      <h2>Mes technos</h2>
      <div className="techno__container">
        <CardTechno thumbnail={logoJs} imgAlt="logo de la techno" title="Javascript" />
        <CardTechno thumbnail={logoTypescript} imgAlt="logo de la techno" title="TypeScript" />
        <CardTechno thumbnail={logoReact} imgAlt="logo de la techno" title="React" />
        <CardTechno thumbnail={logoSass} imgAlt="logo de la techno" title="Sass" />
        <CardTechno thumbnail={logoNode} imgAlt="logo de la techno" title="Node" />
        <CardTechno thumbnail={logoPostgreSQL} imgAlt="logo de la techno" title="PostgreSQL" />
        <CardTechno thumbnail={logoSequelize} imgAlt="logo de la techno" title="Sequelize" />
      </div>
      <div className="techno__separator">
        <img className="techno__separator__img" src={waves} alt="séparateur vagues colorées" />
      </div>
    </section>
  );
}

export default Techno;
