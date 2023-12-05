import './styles.scss';

function Hero() {
  return (
    <section id="sectionHero" className="sectionOne">
      <div className="presentation-container">
        <h1>
          Bonjour, je suis
          {' '}
          <em>Gabrielle Savary</em>
          .
        </h1>
        <h2>Je suis développeuse web.</h2>
      </div>
      <div className="background-container" />
    </section>
  );
}

export default Hero;
