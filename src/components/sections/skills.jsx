import SlideUp from '../../utlits/animations/slideUp';

import javaImg from '../../assets/images/skills/java.png';
import htmlImg from '../../assets/images/skills/html.png';
import cssImg from '../../assets/images/skills/css.png';
import jsImg from '../../assets/images/skills/js.webp';
import reactImg from '../../assets/images/skills/react.png';
import tailwindImg from '../../assets/images/skills/tailwind.png';
import nodeImg from '../../assets/images/skills/node.png';
import expressImg from '../../assets/images/skills/express.png';
import MongoDBImg from '../../assets/images/skills/MongoDB.png';
import GitHubImg from '../../assets/images/skills/GitHub.png';

const skillsData = [
    { id: 0.2, icon: javaImg, title: "Java", percent: "55%" },
    { id: 0.3, icon: htmlImg, title: "HTML", percent: "85%" },
    { id: 0.4, icon: cssImg, title: "CSS", percent: "83%" },
    { id: 0.5, icon: jsImg, title: "JS", percent: "71%" },
    { id: 0.2, icon: reactImg, title: "React", percent: "60%" },
    { id: 0.2, icon: tailwindImg, title: "Tailwind", percent: "85%" },
    { id: 0.3, icon: nodeImg, title: "Node", percent: "54%" },
    { id: 0.4, icon: expressImg, title: "Express", percent: "58%" },
    { id: 0.2, icon: reactImg, title: "React Native", percent: "64%" },
    { id: 0.2, icon: MongoDBImg, title: "Mongo DB", percent: "62%" },
    { id: 0.2, icon: GitHubImg, title: "Git and GitHub", percent: "54%" },
];

const Skills = () => {
    return (
        <section id="skills" className="skill-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12">
                        <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                            <p>Pro Skills</p>
                            <h2>Let’s Explore My Skills</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {skillsData.map((skill, index) => (
                        <Card
                            key={index}
                            icon={skill.icon}
                            title={skill.title}
                            percent={skill.percent}
                            id={skill.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ icon, title, percent, id }) => {
    return (
        <div className="col-6 col-sm-3 col-md-3 col-lg-2 mb-4 d-flex justify-content-center">

            <SlideUp delay={id}>
                <div className="skill-item wow fadeInUp delay-0-2s">
                <img src={icon} alt={title} className="img-fluid skill-img" />

                    <h5>{title}</h5>
                    <span className="percent">{percent}</span>
                </div>
            </SlideUp>
        </div>
    );
};

export default Skills;
