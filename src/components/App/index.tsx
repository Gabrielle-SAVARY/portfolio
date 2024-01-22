import Hero from '../Hero';
import Layout from '../Layout';
import Portfolio from '../Portfolio';
import './styles.scss';

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <Portfolio />
      </main>
    </Layout>
  );
}

export default App;
