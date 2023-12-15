import './styles.scss';

function MyProjects() {
  return (
    <section id="sectionMyProjects" className="sectionTwo">
      <div className="myProjects__container">
        <div className="presentation__heading">
          <p className="presentation__heading__hello">
            Bonjour, je suis Gabrielle SAVARY,
          </p>
          <h2 className="presentation__heading__title">
            Développeuse web
            {' '}
            <em>React/Fullstack</em>
          </h2>
        </div>
        <div className="presentation__texts">
          <p className="presentation__text__paragraph">
            Je travaille sur un environnement fullstack javascript avec React et Node.js.
            <br />
            <em>Je suis à la recherche d&apos;une alternance à partir de 2024</em>
          </p>
          <p className="presentation__text__paragraph">
            J&apos;habite en Charente-Maritime tout en étant mobile.
            Je suis ouverte par débuter par un stage de plusieurs mois.
          </p>
        </div>
        <div className="presentation__btns">
          <button type="button"><a href="#sectionContact" className="btn btn--primary typography--btn">me contacter</a></button>
          <button type="button"><a href="#sectionMyProjects" className="btn btn--secondary typography--btn">Mes projets</a></button>
        </div>
      </div>

    </section>
  );
}

export default MyProjects;
