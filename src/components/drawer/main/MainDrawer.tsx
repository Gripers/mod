import { Dispatch, SetStateAction } from "react";
import styles from "./MainDrawer.module.scss";

import { Drawer, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{ sx: { width: "100%" } }}
    >
      <Box sx={boxStyles}>
        <div className={styles.main__drawer}>
          <div className={styles.main__drawer_header}>
            <div className={styles.main__drawer__header_top}>
              <button onClick={() => setOpen(false)}>
                <Image
                  src="/static/media/close.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </button>
            </div>
            <nav className={styles.main__drawer__header_bottom}>
              <ul>
                <li>
                  <Link href="/login">
                    <Image
                      src="/static/media/lock.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <p>ВХОД</p>
                  </Link>
                </li>
                <li>
                  <Link href="/registration">
                    <Image
                      src="/static/media/pen.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <p>РЕГИСТРАЦИЯ</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.main__drawer_body}>
            <nav className={styles.main__drawer__body_top}>
              <ul>
                <li>ЖЕНЩИНАМ</li>
                <li>МУЖЧИНАМ</li>
              </ul>
            </nav>
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

export default MainDrawer;
