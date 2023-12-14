import './styles.scss';

function Hero() {
  return (
    <section id="sectionHero" className="sectionOne">
      <div className="presentation">
        <div className="presentation__heading">
          <p className="presentation__heading__hello">Bonjour, je suis</p>
          <h1 className="presentation__heading__title">
            Développeuse web
            {' '}
            <em>Fullstack</em>
          </h1>
        </div>
        <div className="presentation__texts">
          <p className="presentation__text__paragraph">
            Je m&apos;appelle
            {' '}
            <em>Gabrielle SAVARY </em>
            et je suis une développeuse web fullstack.
            Je travaille sur un environnement javascript et plus particulièrement
            <em> React/Node JS</em>
            .
          </p>
          <p className="presentation__text__paragraph"><em>Je suis à la recherche d&apos;une alternance à partir de 2024</em></p>
          <p className="presentation__text__paragraph">
            J&apos;habite en Charente-Maritime tout en étant mobile.
            . Je suis ouverte par débuter par un stage de plusieurs mois.
          </p>
        </div>
        <div className="presentation__btns">
          <button type="button"><a href="#sectionAbout" className="btn btn--primary typography--btn">me contacter</a></button>
          <button type="button"><a href="#sectionProjects" className="btn btn--secondary typography--btn">Mes projets</a></button>
        </div>
      </div>

    </section>
  );
}

export default Hero;
