import React, { useRef, useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

function ParallaxSection({ imagePath, offset = 0, children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState('auto');

  useEffect(() => {
    if (ref.current) {
      const updateHeight = () => {
        setHeight(ref.current.scrollHeight);
      };

      updateHeight(); // set initial height

      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(ref.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <Parallax
      strength={-500}
      renderLayer={percentage => (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${imagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: `center ${percentage * 50 + offset}%`,
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
          }}
        />
      )}
    >
      <div
        ref={ref}
        style={{
          minHeight: 'auto',
          height: height,
          width: '100%',
          position: 'relative',
        }}
      >
        {children}
      </div>
    </Parallax>
  );
}

export default ParallaxSection;
