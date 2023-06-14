import { useContext } from "react";
import styles from "./ConfirmModal.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Modal } from "@mui/material";
import Image from "next/image";

import { modalStyles } from "@/config/modal.config";
import { useConfirmMutation } from "@/store/api/auth.api";
import { ModalContext } from "@/context/ModalContext";
import Button from "@/components/button/Button";

type Inputs = {
  phone: string;
  code: number;
};

const ConfirmModal = () => {
  const { confirmOpen: open, setConfirmOpen: setOpen } =
    useContext(ModalContext);
  const [confirm, { isLoading }] = useConfirmMutation();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => confirm(data);

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyles}>
        <div className={styles.modal_header}>
          <h3>ВХОД</h3>
          <button onClick={handleClose}>
            <Image
              src="/static/media/close.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
        </div>
        <div className={styles.modal_footer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="phone">
              Телефон
              <input
                type="string"
                placeholder="+998 (xx) xxx xx xx"
                id="phone"
                required
                {...register("phone")}
              />
            </label>
            <label htmlFor="code">
              Код
              <input
                type="number"
                placeholder="xxxx"
                id="code"
                required
                {...register("code")}
              />
            </label>
            <p>Введите код подтверждения</p>
            <Button isDark type="submit" withLoading={isLoading}>
              ОТПРАВИТЬ
            </Button>
          </form>
        </div>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
