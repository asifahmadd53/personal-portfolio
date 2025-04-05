import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import {
    RiLinkedinFill,
    RiGithubLine,
    RiCircleFill,
    RiDownloadLine,
} from '@remixicon/react';
import profileDark from "../../assets/images/about/downorange.png";
import profileLight from "../../assets/images/about/downgreen.png";
import SlideUp from '../../utlits/animations/slideUp';
import { LuMail } from "react-icons/lu";
import { useSelector } from 'react-redux';

const Hero = () => {

    const isDarkMode = useSelector((state) => state.darkMode.mode);

    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* START ABOUT IMAGE DESIGN AREA */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={isDarkMode ? profileDark : profileLight} alt="About Me" />
                                <h2>Muhammad Asif</h2>
                                <p>I am a Web and App Developer.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li>
                                            <Link target='_blank' to="https://www.linkedin.com/in/muhammad-asif-10036b265/">
                                                <RiLinkedinFill size={20} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target='_blank' to="https://github.com/asifahmadd53">
                                                <RiGithubLine size={20} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link target='_blank' to="https://mail.google.com/mail/?view=cm&fs=1&to=asifahmadd53@gmail.com">
                                                <LuMail size={20} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                                    I’m<span>Muhammad Asif</span>, a Web and App Developer specializing in<span>MERN stack</span>, building scalable solutions.
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'>
                                            <i><RiCircleFill size={14} /></i> Available for Freelancing
                                        </li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a
                                        target="_blank"  // This opens the PDF in a new tab
                                        href="/Asif.pdf"  // Correct file path from the public directory
                                        download="Asif.pdf"  // Enables file download
                                        className="theme-btn"
                                    >
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </a>
                                </div>


                            </div>
                        </SlideUp>

                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee speed={80}>
                                                <h4>Building impactful web and app experiences.</h4>
                                                <h4>Specializing in MERN stack development.</h4>
                                                <h4>Creating scalable and efficient solutions.</h4>
                                                <h4>Delivering high-quality results.</h4>
                                            </Marquee>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
