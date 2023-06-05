import { Dispatch, SetStateAction } from 'react';
import styles from './MainDrawer.module.scss';

import { Drawer, Box } from '@mui/material';

type MainDrawerProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const boxStyles = {
  p: 2,
};

const MainDrawer = ({ open, setOpen }: MainDrawerProps) => {
  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ sx: { width: '100%' } }}
    >
      <Box sx={boxStyles}>
        <div className={styles.main__drawer}>
        </div>
      </Box>
    </Drawer>
  );
};

export default MainDrawer;
