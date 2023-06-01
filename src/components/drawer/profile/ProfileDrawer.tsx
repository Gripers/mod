import { Dispatch, ReactNode, SetStateAction } from 'react';

import { Drawer, Box } from '@mui/material';

type ProfileDrawerProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

const styles = {
  p: 2,
};

const ProfileDrawer = ({ open, setOpen, children }: ProfileDrawerProps) => {
  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ sx: { width: '100%' } }}
    >
      <Box sx={styles}>{children}</Box>
    </Drawer>
  );
};

export default ProfileDrawer;
