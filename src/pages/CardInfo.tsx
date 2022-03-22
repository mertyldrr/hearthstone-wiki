import CardDetail from '../components/CardDetail';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Backdrop } from './styles/CardInfo.styled';

const CardInfo = (): JSX.Element => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setOpen(false);
    navigate({ pathname: '/cards' });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleCloseModal()}
        BackdropComponent={Backdrop}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <CardDetail handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default CardInfo;
