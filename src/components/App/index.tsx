import Hero from '../Hero';

import Layout from '../Layout';
import MyProjects from '../MyProjects';
import './styles.scss';

function App() {
  return (
    <Layout>
      <main>
        <Hero />
        <MyProjects />
      </main>
    </Layout>
  );
}

export default App;
