import { Dispatch, SetStateAction, createContext } from 'react';

type DrawerContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DrawerContext = createContext<DrawerContextType>({
  open: false,
  setOpen: () => {},
});
