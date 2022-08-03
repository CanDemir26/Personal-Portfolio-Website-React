import MySelf from "./img1.jpg";
import MySelf2 from "./img1-circle.png";
import { useState } from "react";
import Modal from "react-modal";
import {MdPerson} from "react-icons/md"
import {FaRegCalendarAlt} from "react-icons/fa"
import {IoLocationSharp} from "react-icons/io5"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
import {GrClose} from "react-icons/gr"


 

export default function About() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    return (
        <section>
            <div className="content-about">
                <div className="image">
                    <img className="mySelf" src={MySelf} alt="mySelf" />
                </div>

                <div className="main">
                    <header>
                        <h3 className="name">
                            MUSTAFA CAN <span className="colored">DEMIR</span>{" "}
                        </h3>
                        <h2 className="about-h2">
                            {" "}
                            <span>Frontend</span> Developer
                        </h2>
                    </header>
                    <hr />

                    <p className="about-myself">
                        My name is{" "}
                        <span className="name-2">Mustafa Can Demir</span>. I am
                        a software developer and I'm very passionate and
                        dedicated to my work. I have acquired the skills and
                        knowledge.
                    </p>

                    <p className="modal-p" onClick={toggleModal}>
                        Learn More
                    </p>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    className="about-modal"
                    overlayClassName="about-modal-overlay"
                >
                     

                    <div className="side-bar">

                        <div className="author">
                            <img
                                className="mySelf-modal"
                                src={MySelf2}
                                alt="mySelf"
                            />
                            <h3 className="modal-name">
                                MUSTAFA CAN{" "}
                                <span className="colored">DEMIR</span>
                            </h3>
                            <h3 className="modal-job"> <span>Frontend</span>  Developer</h3>
                        </div>

                        <div className="modal-info">
                          <ul className="about-ul">
                            <li> <span className="person-icon"><MdPerson /></span>  Mustafa Can Demir</li>
                            <hr />
                            <li> <span className="cal-icon"><FaRegCalendarAlt /></span> 18.11.1999</li>
                            <hr />
                            <li> <span className="loc-icon icon"><IoLocationSharp/></span> Isparta/Turkey</li>
                            <hr />
                            <li> <span className="phon-icon icon"><FaPhoneAlt/></span> +90 553 070 05 65</li>
                            <hr />
                            <li> <span className="mail-icon icon"><HiMail/></span> mustafacan303@gmail.com</li>
                            
                          </ul>

                          <button className="down-btn">Download Cv</button>

                          
                        </div>

                        
                    </div>
                     
                    <hr className="meem" />
                   

                    <div className="right-bar">
                    <button className="modal-close-btn" onClick={toggleModal}> <GrClose/> </button> 
                       <div className="about-me">
                        <h3 className="white">About <span className="colored">Me</span></h3>
                        
                        <hr className="about-hr" />

                        <p className="fit-content">Hello everybody! My name is <span className="white">Mustafa Can Demir</span>. I am a software developer, and I'm very passionate and dedicated to my work. With 2 years experience as a developer, I have acquired the skills and knowledge.</p>
                        
                       </div>
 
                       <div className="skills">
                        <h3 className="white">Programming <span className="colored">Skills</span></h3>
                        <hr className="about-hr" />

                        <div className="langs grey">
                          <h3 className="lang">JavaScript</h3>
                          <h3 className="lang">React</h3>
                          <h3 className="lang">HTML 5</h3>
                          <h3 className="lang">CSS3</h3>
                          <h3 className="lang">Bootstrap 5</h3>
                        </div>

                        <div className="lang-speak">
                          <h3 className="white">Language <span className="colored">Skills</span></h3>
                          <hr className="about-hr"/>

                          <h3 className="colored speak">English <span className="lang" >Professional Working Proficiency</span></h3>
                          <h3 className="colored speak">Turkish <span className="lang" >Native Language Proficiency</span></h3>
                          
                        </div>

                       </div>

                    </div>

                </Modal>
            </div>
        </section>
    );
}
