import React from 'react'
import { Link } from 'react-router-dom'
import { RiDownloadLine } from '@remixicon/react'
import SlideUp from '../../utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                            <h2>Ready to Kickstart Your Project with a Touch of Magic?</h2>
<p>Let’s collaborate and bring your ideas to life. I’m open to full-time or part-time opportunities to deliver exceptional work and push design boundaries ✨.</p>

                                <div className="hero-btns">
                                    <Link to="/contact" className="theme-btn">Let's Talk  <i><RiDownloadLine size={16} /></i></Link>
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

export default CallToAction