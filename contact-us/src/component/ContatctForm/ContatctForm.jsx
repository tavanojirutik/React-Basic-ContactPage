// import React, { useState } from 'react'
import styles from './ContatctForm.module.css'
import Buttonx from '../Button/Buttonx'
import {MdMessage} from "react-icons/md";
import {LuPhoneCall} from 'react-icons/lu';
import {MdEmail} from'react-icons/md';
import {useState} from "react";

const ContatctForm = () => {



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");


  const ViaCall= () =>{
    console.log("I am Calling");
  }

 
    const onSubmitx =(event) =>{
      event.preventDefault();


      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);

      // console.log(name , email , sms);

      //.values use For Finding the Values
      // console.log("name",event.target[0].value);
      // console.log("email",event.target[1].value);
      // console.log("Message",event.target[2].value);
    }
  

  return (
    <section className={`${styles.container} `}>


        <div className={styles.contactForm}>
            <div className={`${styles.TopBtn}`}>
                <Buttonx text = "VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px "/>} /> 
                <Buttonx onClick={ViaCall}text = "VIA CALL" icon={<LuPhoneCall fontSize="24px "/>} /> 
            </div>
                <Buttonx SecBtn={true} text = "VIA CALL" icon={<MdEmail fontSize="24px "/>} /> 

        <form onSubmit={onSubmitx}>
            <div className={styles.form_Controler}>
                <label htmlFor="name">Name</label>
                <input type="name" />
            </div>
            <div className={styles.form_Controler}>
                <label htmlFor="email">Email</label>
                <input type="email" />
            </div>
            <div className={styles.form_Controler}>
                <label htmlFor="text">Message</label>
                <textarea name='text' />
            </div>

            <div 
              style={{
                display:"flex",
                justifyContent: "end"

              }}
            >
            <Buttonx  text = "Submit"  /> 
            </div> {name + " " + email + " "+text}
            

        </form>

        


        </div>

        

        <div className={`${styles.contact_image}`}></div>
              <img src="/img/contact.svg" alt="error-Img" style={{marginTop:"-75px"}}/>
              

    </section>
    
  )
}

export default ContatctForm