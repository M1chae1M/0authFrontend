import {useInView} from 'react-intersection-observer';
import React from 'react';

function OnloadAnimatedContainer({children}){
  const [ref, inView]=useInView({});
    const elementStyles={
      opacity: '0',
      transform: 'translateX(250px)',
    }
    const animationStyles={
      opacity: '1',
      transform: 'translateX(0)',
      transition: 'all 1s ease-in-out',
    }
    const styles={...elementStyles, ...(inView ? animationStyles:{})}
  return (
    <div ref={ref} style={{overflow:'hidden'}}>
      <div style={styles}>
        {children}
      </div>
    </div>
  );
}

export default OnloadAnimatedContainer;
