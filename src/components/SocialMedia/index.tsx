import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import './styles.scss';

interface SocialMediaProps {
  mediaName: string;
  mediaLink: string;
  mediaIconColor: string;
  handleCloseMobileMenu: (value: boolean) => void;
}

function SocialMedia({
  mediaName, mediaLink, mediaIconColor, handleCloseMobileMenu,
}: SocialMediaProps) {
  const socialMediaName = `social-media_${mediaName}`;
  const iconStyle = { fontSize: '32px', color: 'inherit' };

  const handleClick = () => {
    handleCloseMobileMenu(false);
  };

  // Icone en fonction du nom du media
  const socialMediaIcon = (media: string) => {
    switch (media) {
      case 'linkedin':
        return <AiFillLinkedin style={iconStyle} />;
      case 'github':
        return <AiFillGithub style={iconStyle} />;
      default:
        return null;
    }
  };
  return (
    <a
      href={mediaLink}
      target="_blank"
      rel="noreferrer"
      className={`social-media__link link-color_${mediaIconColor}`}
      onClick={handleClick}
    >
      <div className={`social-media__icon ${socialMediaName}`}>
        {socialMediaIcon(mediaName)}

      </div>
    </a>
  );
}

export default SocialMedia;
