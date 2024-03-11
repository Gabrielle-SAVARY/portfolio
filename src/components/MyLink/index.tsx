import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './styles.scss';

interface MyLinkProps {
  label: string;
  path: string;
  target: string;
  classColor: string;
  iconName: string;
}

function MyLink({
  label, path, target, classColor, iconName,
}: MyLinkProps) {
  const iconStyle = (icon: string) => {
    switch (icon) {
      case 'linkedin':
        return <AiFillLinkedin className="link-like-btn__icon" />;
      case 'github':
        return <AiFillGithub className="link-like-btn__icon" />;
      default:
        return null;
    }
  };
  return (
    <a
      href={path}
      target={target}
      rel="noreferrer"
      className={`link-like-btn ${classColor}`}
    >
      {label}
      {iconStyle(iconName)}

    </a>
  );
}

export default MyLink;
