import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {IoLocationSharp} from "react-icons/io5"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import {BsLinkedin} from "react-icons/bs";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dtm9jpj",
                "template_uxl2rso",
                form.current,
                "E6eiNhMf-UT8up89D"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-area">
            <div className="header">
                <h3 className="large white">
                    GET IN <span className="colored">TOUCH</span>
                </h3>
                <hr className="contact-hr" />
            </div>

            <div className="contact-section">
                <div className="contact-infoss white">
                    <h3><span className="loc-icon icon cont"><IoLocationSharp/></span> Isparta/Turkey</h3>
                    <h3 ><span className="phon-icon icon cont "><FaPhoneAlt/></span>+90 553 070 05 65</h3>
                    <h3 ><span className="mail-icon icon cont "><HiMail/></span>mustafacan303@gmail.com</h3>
                    <h3 >
                    <span className="linkedin-icon icon cont"><BsLinkedin/></span>
                        {" "}
                        Linkedin
                    </h3>
                </div>

                <form className="form-items" ref={form} onSubmit={sendEmail}>
                  <div className="sender-info">
                   <input className="name-input" type="text" name="user_name" placeholder="Name" />
                   <input className="email-input" type="email" name="user_email" placeholder="Email" />
                  </div>
                    <textarea className="message grey" name="message" placeholder="Message" />
                    <input className="sub-btn" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
