import './contact.scss'
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useRef, useState } from "react";

import emailjs from 'emailjs-com'

export default function Contact({dark}) {

    const formRef = useRef();
    const [done, setDone] = useState();

    const handelSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_34ehnfo",
                "template_l30h67z",
                formRef.current,
                "user_XkHowpzeoMvwEDtlXZ6D8"
            )
            .then(
                (result) => {
                console.log(result.text);
                setDone(true)
                },
                (error) => {
                console.log(error.text);
                }
            );
    }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +20 101 604 629 8
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              omarwork010@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Alexandria - El Mandara
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handelSubmit}>
            <input style={{backgroundColor: dark && "#333"}}  type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: dark && "#333"}}  type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: dark && "#333"}}  type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: dark && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thanks Alot ..."}
          </form>
        </div>
      </div>
    </div>
  );
}
