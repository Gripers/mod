import { useRouter } from "next/router";
import Image from "next/image";

const styles = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const GoBack = () => {
  const { back } = useRouter();

  return (
    <button onClick={back} style={styles}>
      <Image src="/static/media/arrow.svg" alt="" width={20} height={20} />
      <span>НАЗАД</span>
    </button>
  );
};

export default GoBack;
