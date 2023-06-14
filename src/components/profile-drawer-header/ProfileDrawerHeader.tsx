import { useContext } from "react";
import styles from "./ProfileDrawerHeader.module.scss";

import Image from "next/image";

import { DrawerContext } from "@/context/DrawerContext";

type ProfileDrawerHeaderProps = { title: string };

const ProfileDrawerHeader = ({ title }: ProfileDrawerHeaderProps) => {
  const { setOpen } = useContext(DrawerContext);

  return (
    <div className={styles.profile__drawer_header}>
      <button onClick={() => setOpen(false)}>
        <Image src="/static/media/close.svg" alt="" width={16} height={16} />
      </button>
      <h2>{title}</h2>
    </div>
  );
};

export default ProfileDrawerHeader;
