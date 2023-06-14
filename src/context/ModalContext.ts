import { Dispatch, SetStateAction, createContext } from 'react';

type ModalContextType = {
  confirmOpen: boolean;
  setConfirmOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextType>({
  confirmOpen: false,
  setConfirmOpen: () => {},
});
