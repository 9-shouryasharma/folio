import React, { useState } from "react";
import { lockClosed, closeOutline, bookOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import whatDoing from "../data/whatdoing/whatdoing";
import testimonials from "../data/testimonials/testimonials";
import clients from "../data/clients/clients";
import avatar1 from "../assets/images/avatar-1.png";
import iconQuote from "../assets/images/icon-quote.svg";
// import Chatbot from "./Chatbot"; // Import chatbot
// import { IonIcon } from "@ionic/react";
// import { } from "ionicons/icons";

const AboutPage = ({ currentTheme, isActive }) => { // Add currentTheme prop
    const [modalContent, setModalContent] = useState(null);

    const openModal = (item) => {
        setModalContent(item);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <article className={`about ${isActive ? "active" : ""}`} data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    Hello, I am Shourya Sharma, I was not able to do programming for some time, and I am now preparing for exams, after I am done with my exams I will focus on my work again

                    There are a few things I have to focus on :


                </p>
                
            </section>


            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <IonIcon icon={bookOutline} />
                    </div>
                    <h3 className="h3">This I Have to Focus on</h3>
                </div>

                
                <ol className="timeline-list">
                 <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Completing My Projects</h4>
                        <p className="timeline-text">I have a few good projects, along with some that I am working on to strengthen my understanding and application of fundamentals. I plan to complete them with proper documentation and clean up my GitHub profile, or perhaps create a new account. I have older projects to finish and new ones to work on, while continuing to improve my fundamentals and their practical application. I don't want to ramble about them here, so I'll just wait until the time comes. I took my time to deploy this portfolio properly and make sure I had something to show. I also have a YouTube channel where I used to post videos, and I'll be sharing and discussing my work there as well.</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Working on My Health</h4>
                        <p className="timeline-text">Pretty self-explanatory.</p>
                    </li>

                        <li className="timeline-item">
                            <h4 className="h4 timeline-item-title">
                                DSA, Competitive Programming & Open Source
                            </h4>
                            <p className="timeline-text">
                                I'll be focusing on these and putting in consistent effort for some time as well.
                            </p>
                        </li>
                      
                    
                </ol>
            </section>

            

            <div className="locked-content">

             <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>

                <ul className="service-list">
                    {whatDoing.map((item, index) => (
                        <li className="service-item" key={index}>
                            <div className="service-icon-box">
                                <img src={item.img} alt={item.title} width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">{item.title}</h4>
                                <p className="service-item-text">{item.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
 >

           
                <section className="testimonials">
                    <h3 className="h3 testimonials-title">Testimonials</h3>

                    <ul className="testimonials-list has-scrollbar">
                        {testimonials.map((item, index) => (
                            <li className="testimonials-item" key={index} onClick={() => openModal(item)}>
                                <div className="content-card" data-testimonials-item>
                                    <figure className="testimonials-avatar-box">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            width="60"
                                            data-testimonials-avatar
                                        />
                                    </figure>

                                    <h4
                                        className="h4 testimonials-item-title"
                                        data-testimonials-title
                                    >
                                        {item.name}
                                    </h4>

                                    <div className="testimonials-text" data-testimonials-text>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

            
            {/* Modal */}
            <div className={`modal-container ${modalContent ? "active" : ""}`} data-modal-container>
                <div className={`overlay ${modalContent ? "active" : ""}`} data-overlay onClick={closeModal}></div>

                <section className="testimonials-modal">
                    <button className="modal-close-btn" data-modal-close-btn onClick={closeModal}>
                        <IonIcon icon={closeOutline} />
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src={modalContent?.avatar || avatar1} alt={modalContent?.name || "Avatar"} width="80" data-modal-img />
                        </figure>

                        <img src={iconQuote} alt="quote icon" />
                    </div>

                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title>
                            {modalContent?.name}
                        </h4>

                        <time dateTime="2021-06-14">14 June, 2021</time>

                        <div data-modal-text>
                            <p>{modalContent?.text}</p>
                        </div>
                    </div>
                </section>
            </div>
                <section className="clients">
                    <h3 className="h3 clients-title">Clients</h3>

                    <ul className="clients-list has-scrollbar">
                        {clients.map((client, index) => (
                            <li className="clients-item" key={index}>
                                <a href={client.link}>
                                    <img src={client.img} alt={`client logo ${index + 1}`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="locked-content-overlay">
                    <IonIcon icon={lockClosed} className="text-9xl text-white" />
                </div>
            </div>
            {/* <Chatbot currentTheme={currentTheme} /> */}
        </article>
    );
};

export default AboutPage;