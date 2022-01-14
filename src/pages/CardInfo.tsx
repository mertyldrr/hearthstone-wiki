import CardDetail from '../components/CardDetail';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Backdrop } from './styles/CardInfo.styled';

const CardInfo = () => {
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();
  const handleCloseModal = () => {
    setOpen(false);
    navigate('/cards');
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
