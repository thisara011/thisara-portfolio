import React from 'react';
import Image from 'next/image';
import '../styles/WhoAmI.css';

const WhoAmI = () => {
    return (
        <section className="about" id="about">
            <div className="about-main">
                <div className="about-text">
                    <h2 className="section-title">Who Am I</h2>
                    <p>
                        As a <span className="highlight-word bold">Computer Science</span> student at NIBM Sri Lanka, I'm passionate about using technology to solve real-world problems, with a strong focus on <span className="highlight-word bold">Data Science</span>, <span className="highlight-word bold">Artificial Intelligence</span>, and <span className="highlight-word bold">Machine Learning</span>. I have hands-on experience in data analysis, visualization, predictive modeling, API development, and building AI-driven solutions. I'm especially interested in blending AI with traditional Ayurvedic medicine to develop innovative health and wellness applications. I'm always open to learning, collaborating, and contributing to impactful tech projects—let's connect and explore what we can build together!
                    </p>
                    <div className="tech-stack">
                        <span className="tech-pill bold">Data Science</span>
                        <span className="tech-pill bold">AI/ML</span>
                        <span className="tech-pill">API Development</span>
                        <span className="tech-pill">Visualization</span>
                        <span className="tech-pill">Predictive Modeling</span>
                        <span className="tech-pill">Healthcare Tech</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoAmI; 