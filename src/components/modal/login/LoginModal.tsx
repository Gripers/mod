import { useState } from 'react';
import styles from './LoginModal.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

import { modalStyles } from '@/config/modal.config';
import { useLoginMutation } from '@/store/api/auth.api';
import Button from '@/components/button/Button';

type Inputs = {
  phone: string;
};

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => login(data);

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
        <Box sx={modalStyles}>
          <div className={styles.modal_header}>
            <h3>ВХОД</h3>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='phone'>
                Телефон
                <input
                  type='string'
                  placeholder='+998 (xx) xxx xx xx'
                  id='phone'
                  required
                  {...register('phone')}
                />
              </label>
              <p>На введеный вами номер придет код</p>
              <Button isDark type='submit' withLoading={isLoading}>
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
