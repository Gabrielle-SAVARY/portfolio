import { FiAlignJustify, FiX } from 'react-icons/fi';
import './styles.scss';

interface BtnMenuMobileProps {
  isMobileMenuOpen: boolean;
  changeMobileMenuIcon: () => void;
}

function BtnMenuMobile({ changeMobileMenuIcon, isMobileMenuOpen }:BtnMenuMobileProps) {
  const handleChangeToggleMenu = () => {
    changeMobileMenuIcon();
  };
  const classnameBtnMenuMobile = isMobileMenuOpen ? 'header__navbar__btn-menu-mobile--open' : 'header__navbar__btn-menu-mobile';
  // Style des icones
  const styledIconMenu = {
    strokeWidth: '1.8', height: '1.5rem', width: '1.5rem',
  };
  return (
    <button type="button" className={classnameBtnMenuMobile} onClick={handleChangeToggleMenu}>
      {isMobileMenuOpen
        ? <FiX style={styledIconMenu} />
        : <FiAlignJustify style={styledIconMenu} />}
    </button>

  );
}

export default BtnMenuMobile;
