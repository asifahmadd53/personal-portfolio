import { RiMailLine, RiMapPinLine, RiPhoneLine, RiLinkedinLine, RiGithubLine, RiSkypeLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    {/* <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiMapPinLine size={20} /></i>
                            </div>
                            <h2>Location:</h2>
                            <p>Jurain, Dhaka, Bangladesh</p>
                        </div>
                    </SlideUp> */}

                    <SlideUp delay={3}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiPhoneLine size={20} /></i>
                            </div>
                            <h2>Contact Number:</h2>
                            <p>+92 3076916343</p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={4}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiMailLine size={20} /></i>
                            </div>
                         <h2>Email:</h2>
<p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=asifahmadd53@gmail.com" target="_blank" rel="noopener noreferrer">asifahmadd53@gmail.com</a></p>

                        </div>
                    </SlideUp>

                    <SlideUp delay={5}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiLinkedinLine size={20} /></i>
                            </div>
                            <h2>LinkedIn:</h2>
                            <p><a href="https://www.linkedin.com/in/muhammad-asif-10036b265/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
                        </div>
                    </SlideUp>

                    <SlideUp delay={6}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiGithubLine size={20} /></i>
                            </div>
                            <h2>GitHub:</h2>
                            <p><a href="https://github.com/asifahmadd53" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
                        </div>
                    </SlideUp>

                  
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption
