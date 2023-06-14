import { useWindowSize } from "@/hooks/useWindowSize";
import Image from "next/image";

const styles = {
  marginTop: "16px",
};

const Banner = () => {
  const { width } = useWindowSize();

  return (
    <section>
      {width! <= 700 ? (
        <>
          <h2>НОВАЯ КОЛЛЕКЦИЯ</h2>
          <Image
            src="/static/media/banner_mobile.svg"
            alt=""
            fill
            style={styles}
          />
        </>
      ) : (
        <>
          <h2>ПУХОВИКИ И ЗИМНИЕ КУРТКИ</h2>
          <Image src="/static/media/banner.webp" alt="" fill style={styles} />
        </>
      )}
    </section>
  );
};

export default Banner;
