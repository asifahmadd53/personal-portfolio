
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import profile from "../../assets/images/about/profile.png"
import partner1 from "../../assets/images/client-logos/partner1.png"
import partner2 from "../../assets/images/client-logos/partner2.png"
import partner3 from "../../assets/images/client-logos/partner3.png"
import partner4 from "../../assets/images/client-logos/partner4.png"
import partner5 from "../../assets/images/client-logos/partner5.png"
import SlideUp from '../../utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile} alt="About Me" />
                                <h2>Dorbesh Baba</h2>
                               <p>I am a Web Designer based in san francisco.</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link to=""><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link to=""><RiTwitterXLine size={20} /></Link></li>
                                        <li><Link to=""><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link to=""><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p>Hello There!</p>
                                <h2>
                            I’m<span>Muhammad Asif</span>, a Web and App Developer specializing in<span>MERN stack</span>, building scalable solutions.
                        </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'><i><RiCircleFill size={14} /></i> Available for Freelancing</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i> </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom">
                                <h2>Company I Worked With</h2>
                                <div className="company-list">
                                    <div className="scroller">
                                        <div className="scroller__inner">
                                            <Marquee speed={100}>
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
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero