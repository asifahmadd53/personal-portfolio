import profile from "../../assets/images/about/downorange.png"
import profile2 from "../../assets/images/about/downgreen.png"
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'
import { useSelector } from "react-redux"
const Summery = () => {

    const isDarkMode = useSelector((state) => state.darkMode.mode);

    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={isDarkMode ? profile : profile2} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                        <div className="about-content-part">
    <h2>
        I’m Muhammad Asif, a Web and App Developer (MERN Stack).
    </h2>
    <p>
        I am a passionate web and app developer specializing in the MERN stack.  
        I started my web development journey in my 3rd semester and have built multiple projects,  
        ranging from simple interfaces to full-stack applications.
    </p>
    <p>
        After gaining experience in web development and creating professional websites,  
        I expanded my expertise into mobile app development.  
        I have since been working on building responsive, high-performance applications  
        that enhance user experiences across both web and mobile platforms.
    </p>
    <p>
        With a strong foundation in both frontend and backend technologies,  
        I strive to develop scalable, efficient, and intuitive digital solutions.
    </p>
    <div className="hero-btns">
        <a href="contact.html" className="theme-btn">
            Get In Touch <i><RiMailSendLine size={16} /></i>
        </a>
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

export default Summery