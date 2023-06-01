import { CSSProperties } from 'react';

import Image from 'next/image';

const styles: CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  borderRadius: '50%',
  backgroundColor: 'white',
  padding: '5px',
};

const ToFav = () => {
  return (
    <button style={styles}>
      <Image src='/static/media/heart.svg' alt='' width={20} height={20} />
    </button>
  );
};

export default ToFav;
