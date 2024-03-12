import About from '../About';
import Hero from '../Hero';
import Layout from '../Layout';
import PortfolioProjects from '../PortfolioProjects';
import Techno from '../Techno';
import './styles.scss';

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Techno />
        <PortfolioProjects />
        <About />
      </main>
    </Layout>
  );
}

export default App;
