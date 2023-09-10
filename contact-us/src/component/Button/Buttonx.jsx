import React from 'react'
import styles from './button.module.css';



export const Buttonx = (props) => {
  const {SecBtn , icon , text , ...rest}=props;
  return (
    <button 
        {...rest} //Rest Operater Are Calling For The OnClick Listiner
        className={`${SecBtn ? styles.SecButton :styles.primaryButton}`}
    >   {icon}
        {text}
        
    </button>
  )
}
export default Buttonx;