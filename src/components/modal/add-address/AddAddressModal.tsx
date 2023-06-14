import { useState } from "react";
import styles from "./AddAddressModal.module.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Image from "next/image";

import Button from "@/components/button/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const AddAddressModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button isDark onClick={handleOpen}>
        ДОБАВИТЬ КАРТУ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.modal__header}>
            <h3>ДОБАВИТЬ КАРТУ</h3>
            <button onClick={handleClose}>
              <Image
                src="/static/media/close.svg"
                alt=""
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className={styles.modal__footer}>
            <form>
              <label htmlFor="recipient">
                ИМЯ ПОЛУЧАТЕЛЯ
                <input type="text" id="recipient" />
              </label>
              <label htmlFor="country">
                СТРАНА
                <input type="text" id="country" />
              </label>
              <label htmlFor="address">
                УЛИЦА, ДОМ И КВАРТИРА
                <input type="text" id="address" />
              </label>
              <label htmlFor="area">
                КРАЙ, ОБЛАСТЬ И РЕГИОН
                <input type="text" id="area" />
              </label>
              <label htmlFor="city">
                ГОРОД
                <input type="text" id="city" />
              </label>
              <label htmlFor="post_code">
                ПОЧТОВЫЙ ИНДЕКС
                <input type="number" id="post_code" />
              </label>
              <label htmlFor="phone_number">
                МОБИЛЬНЫЙ ТЕЛЕФОН
                <input type="number" id="phone_number" placeholder="+998" />
              </label>
              <Button isDark type="submit">
                СОХРАНИТЬ
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default AddAddressModal;
