import { useState } from 'react';
import styles from './LoginModal.module.scss';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

import Button from '@/components/button/Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const LoginModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button isDark onClick={handleOpen}>
        ВОЙТИ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className={styles.modal_header}>
            <h3>ВХОД И РЕГИСТРАЦИЯ</h3>
            <button onClick={handleClose}>
              <Image
                src='/static/media/close.svg'
                alt=''
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className={styles.modal_footer}>
            <form>
              <label htmlFor='phone'>
                Телефон
                <input type='number' placeholder='+998' id='phone' required />
              </label>
              <p>На введеный вами номер придет код</p>
              <Button isDark type='submit'>
                ОТПРАВИТЬ
              </Button>
              <Button>ОТПРАВИТЬ ЧЕРЕЗ ПОЧТУ</Button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
