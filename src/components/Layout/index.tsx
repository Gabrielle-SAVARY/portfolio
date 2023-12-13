import Header from '../Header';
import './styles.scss';

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }:LayoutProps) {
  return (
    <div className="app__container">
      <Header />
      <div className="app__content">{children}</div>
    </div>
  );
}

export default Layout;
