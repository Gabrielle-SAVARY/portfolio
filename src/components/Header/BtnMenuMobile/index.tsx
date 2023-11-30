import { FiAlignJustify, FiX } from 'react-icons/fi';
import './styles.css';

interface BtnMenuMobileProps {
  isMobileMenuOpen: boolean;
  changeMobileMenuIcon: () => void;
}

function BtnMenuMobile({ changeMobileMenuIcon, isMobileMenuOpen }:BtnMenuMobileProps) {
  const handleChangeToggleMenu = () => {
    changeMobileMenuIcon();
  };
  return (
    <button type="button" className="header__navbar__btn-menu-mobile" onClick={handleChangeToggleMenu}>
      {isMobileMenuOpen ? <FiX /> : <FiAlignJustify />}
    </button>

  );
}

export default BtnMenuMobile;
