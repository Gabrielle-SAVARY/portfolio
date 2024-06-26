import About from '../About';
import Hero from '../Hero';
import Layout from '../Layout';
import PortfolioProjects from '../PortfolioProjects';
import './styles.scss';

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <PortfolioProjects />
        <About />
      </main>
    </Layout>
  );
}

export default App;
