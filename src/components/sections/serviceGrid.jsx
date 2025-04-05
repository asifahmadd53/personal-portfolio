import { RiGlobalFill, RiPantoneFill } from '@remixicon/react'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import SlideUp from '../../utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Web Development"} description={"Building responsive, user-centric websites using the latest technologies and best practices."} />
                        <Card id={2} icon={<HiOutlineDevicePhoneMobile size={60} />} title={"App Development"} description={"Specializing in building scalable and efficient mobile applications using modern frameworks."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"MERN Stack Development"} description={"Expert in MERN stack, crafting full-stack solutions with a focus on performance and scalability."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}