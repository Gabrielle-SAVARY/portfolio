import { MdClose } from 'react-icons/md';
import './styles.scss';

interface MyProjectModalProps {
  setIsProjectModalOpen: (value: boolean) => void;
}

function MyProjectModal({ setIsProjectModalOpen }: MyProjectModalProps) {
  const handleMCloseModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsProjectModalOpen(false);
  };

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__content__header">
          <h4>NAME</h4>
          <button type="button" className="modal__content__header__btn" onClick={(event) => handleMCloseModal(event)}>
            <MdClose
              size={46}
              className="modal__content__header__btn--close-modal"
            />
          </button>
        </div>
        <p>test modale</p>
      </div>
    </div>

  );
}

export default MyProjectModal;
