import { useState } from 'react';
import styles from './RegistrationModal.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

import { modalStyles } from '@/config/modal.config';
import { useRegisterMutation } from '@/store/api/auth.api';
import Button from '@/components/button/Button';

type Inputs = {
  phone: string;
  first_name: string;
  last_name: string;
};

const RegistrationModal = () => {
  const [open, setOpen] = useState(false);
  const [register, { isLoading }] = useRegisterMutation();
  const { register: inputRegister, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    register(data).then(() => reset());

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button isDark onClick={handleOpen}>
        ЗАРЕГИСТРИРОВАТЬСЯ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyles}>
          <div className={styles.modal_header}>
            <h3>РЕГИСТРАЦИЯ</h3>
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
                  type='text'
                  placeholder='+998 (xx) xxx xx xx'
                  id='phone'
                  required
                  {...inputRegister('phone')}
                />
              </label>
              <label htmlFor='first_name'>
                Имя
                <input
                  type='text'
                  id='first_name'
                  required
                  {...inputRegister('first_name')}
                />
              </label>
              <label htmlFor='last_name'>
                Фамилия
                <input
                  type='text'
                  id='last_name'
                  required
                  {...inputRegister('last_name')}
                />
              </label>
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

export default RegistrationModal;
