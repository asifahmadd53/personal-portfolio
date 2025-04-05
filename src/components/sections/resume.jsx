import { RiBookLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card
                                        year={'March 2023 - Jun 2023'}
                                        title={'Java Basics & GUI Projects'}
                                        institution={'COMSATS University Islamabad'}
                                        description={'Exploring Java fundamentals and developing practical GUI-based projects to enhance problem-solving skills and programming expertise.'}
                                    />

                                    <Card
                                        year={'Jun 2023 - Oct 2023'}
                                        title={'Web Development'}
                                        institution={'Self-Taught'}
                                        description={'Learned HTML, CSS, and JavaScript to build interactive, responsive UIs. Then exploring SQL for dynamic web applications and database integration.'}
                                    />
                                    <Card
                                        year={'Nov 2023 - Jan 2024'}
                                        title={'Frontend Developer'}
                                        institution={'Independent Development'}
                                        description={'Built responsive projects with custom CSS and JavaScript, focusing on interactive components and cross-browser compatibility for a seamless user experience.'}
                                    />

                                    <Card
                                        year={'2021 - 2022'}
                                        title={'Backend Developer & MERN Stack'}
                                        institution={'Developing Projects'}
                                        description={'Started with backend development using Node.js and Express.js, then expanded into the MERN stack, building full-stack applications with MongoDB, Express, React, and Node.js.'}
                                    />

                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card
                                        year={'2022 - 2026'}
                                        title={'Bachelor of Science in Computer Science (BSCS)'}
                                        institution={'COMSATS University Islamabad, Sahiwal Campus (Ongoing)'}
                                        description={'Currently pursuing a BSCS degree, focusing on computer science fundamentals, software development, and emerging technologies.'}
                                    />


                                    <Card
                                        year={'2023 - Present'}
                                        title={'Self-Taught Web Development'}
                                        institution={'Independent Learning'}
                                        description={'Started learning web development in 2023, focusing on HTML, CSS, JavaScript, and later expanding to backend technologies and the MERN stack through self-directed projects and resources.'}
                                    />
                                    <Card
                                        year={'2025 - Present'}
                                        title={'Final Year Project (FYP): React Native App Development'}
                                        institution={'COMSATS University Islamabad, Sahiwal Campus'}
                                        description={'Currently working on my final year project, focusing on React Native app development. The project involves building cross-platform mobile applications with a focus on performance, user experience, and seamless integration with back-end services.'}
                                    />

                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution, description }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                    <br />
                    <span className="description"> {description} </span>
                </div>
            </div>
        </SlideUp>
    )
}