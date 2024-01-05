import {useInView} from 'react-intersection-observer';
import React from 'react';

export default function OnloadAnimation({children}){
  const [ref, inView]=useInView({
    triggerOnce:true
  });
    const styles={
      transform:'translateX(250px)',
      opacity:'0',
      margin:'15px',
      border:'solid #f0f0f0 1px',
      padding:'15px',
      borderRadius:'10px',
      boxShadow:'2px 2px #e0e0e0',
    }
    const animation={
      opacity:'1',
      transform:'translateX(0)',
      transition:'all 1s ease-in-out',
    }
    const style={...styles, ...(inView?animation:{})}
  return(
    <div ref={ref} style={style}>
      {children}
    </div>
  )
}