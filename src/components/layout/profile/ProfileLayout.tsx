import { ReactNode, useContext, useEffect } from "react";
import styles from "./ProfileLayout.module.scss";

import { useRouter } from "next/router";

import { DrawerContext } from "@/context/DrawerContext";
import ProfileSidebar from "@/components/profile-sidebar/ProfileSidebar";
import ProfileDrawer from "@/components/drawer/profile/ProfileDrawer";
import SectionLayout from "../section/SectionLayout";

type ProfileLayoutProps = { children: ReactNode };

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const { open, setOpen } = useContext(DrawerContext);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () =>
      window.innerWidth <= 700 ? setOpen(true) : null;

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);

  return (
    <section id="container" className={styles.profile}>
      <SectionLayout title="ЗДРАВСТВУЙТЕ, RIOT" />
      <div className={styles.profile__wrapper}>
        <div className={styles.profile__wrapper_left}>
          <ProfileSidebar />
          <ProfileDrawer open={open} setOpen={setOpen}>
            {children}
          </ProfileDrawer>
        </div>
        <div className={styles.profile__wrapper_right}>{children}</div>
      </div>
    </section>
  );
};

export default ProfileLayout;
