import './styles.scss';

interface MyProjectsProps {
  title: string;
  backgroundHero: string;
}

function MyProjects({ title, backgroundHero }: MyProjectsProps) {
  const backgroundImageStyle = {
    backgroundImage: backgroundHero ? `url(${backgroundHero})` : '',
    backgroundColor: '#ffff',
  };

  return (
    <div className="project">
      <div className="project__hero" style={backgroundImageStyle}>
        <h3 className="project__hero__name">
          {title}
        </h3>
        <div className="project__hero__links">
          test
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
