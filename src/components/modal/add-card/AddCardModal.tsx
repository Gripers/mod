import { KeyboardEvent, useState } from 'react';
import styles from './AddCardModal.module.scss';

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

const AddCardModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function formatCC(event: KeyboardEvent<HTMLInputElement>) {
    // @ts-ignore временно
    let foo = event.target.value.split(' ').join('');
    if (foo.length > 0) foo = foo.match(new RegExp('.{1,4}', 'g'))!.join(' ');
    // @ts-ignore временно
    event.target.value = foo;
  }

  return (
    <>
      <Button isDark onClick={handleOpen}>
        ДОБАВИТЬ КАРТУ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className={styles.modal__header}>
            <h3>ДОБАВИТЬ КАРТУ</h3>
            <button onClick={handleClose}>
              <Image
                src='/static/media/close.svg'
                alt=''
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className={styles.modal__footer}>
            <form>
              <label htmlFor='card'>
                Номер карты
                <input type='text' id='card' required onKeyUp={formatCC} />
              </label>
              <div className={styles.modal__footer_flex}>
                <div className={styles.modal__footer__flex_exp}>
                  <label htmlFor='month'>
                    ММ
                    <input type='number' id='month' required />
                  </label>
                  <label htmlFor='year'>
                    ГГ
                    <input type='number' id='year' required />
                  </label>
                </div>
                <div className={styles.modal__footer__flex_code}>
                  <label htmlFor='code'>
                    CVV/CVC
                    <input type='number' id='code' required />
                  </label>
                </div>
              </div>
              <p>
                Нажимая на кнопку «Добавить», вы соглашаетесь с условиями
                добавления карты
              </p>
              <Button isDark type='submit'>
                ДОБАВИТЬ
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddCardModal;
