import React, { useEffect } from 'react';
import Image from 'next/image';
import '../styles/Hero.css';

const Hero = () => {
    useEffect(() => {
        // Add 'visible' class to elements sequentially
        const animateElements = () => {
            const hello = document.querySelector('.hello-text');
            const iam = document.querySelector('.iam-text');
            const name = document.querySelector('.name-text');
            const description = document.querySelector('.description-text');

            // Start the sequence with specified delays
            setTimeout(() => {
                hello?.classList.add('visible');
            }, 0);

            setTimeout(() => {
                iam?.classList.add('visible');
            }, 2000);

            setTimeout(() => {
                name?.classList.add('visible');
            }, 4000);

            setTimeout(() => {
                description?.classList.add('visible');
            }, 5000);
        };

        // Start animation when component mounts
        animateElements();
    }, []);

    return (
        <section className="hero" id="home">
            <div className="cover-photo">
                <Image
                    src="/assets/cover photo.jpg"
                    alt="Cover Photo"
                    width={1920}
                    height={1080}
                    priority
                    quality={100}
                />
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <h3 className="hello-text">HELLO, THERE!</h3>
                    <h3 className="iam-text">I AM</h3>
                    <h1 className="name-text">Thisara Edirisinghe</h1>
                    <p className="description-text">
                        A Computer Science student passionate about data, algorithms, and creating magic with AI.
                    </p>
                    <div className="cta-buttons">
                        <a href="#contact" className="btn primary">Let's Talk</a>
                        <a href="#about" className="btn secondary">About Me</a>
                    </div>
                </div>
                <div className="profile-photo">
                    <Image
                        src="/assets/profile photo.jpg"
                        alt="Profile Photo"
                        width={450}
                        height={450}
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero; 