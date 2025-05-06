import React from 'react';
import Image from 'next/image';
import '../styles/Logos.css';

const Logos = () => {
    const logos = [
        {
            src: '/assets/microsoft-learn.png',
            alt: 'Microsoft Learn',
            title: 'Microsoft Learn',
            subtitle: 'Student Ambassador'
        },
        {
            src: '/assets/ieee-nibm.png',
            alt: 'IEEE NIBM',
            title: 'IEEE NIBM',
            subtitle: 'Student Branch Chairperson'
        },
        {
            src: '/assets/nibm-computing.png',
            alt: 'NIBM Computing',
            title: 'NIBM Computing Society',
            subtitle: 'Vice President'
        },
        {
            src: '/assets/cssl.png',
            alt: 'Computer Society of Sri Lanka',
            title: 'Computer Society of Sri Lanka',
            subtitle: 'Member'
        },
        {
            src: '/assets/irobex.png',
            alt: 'IROBEX',
            title: 'IROBEX 2024',
            subtitle: 'Team Leader'
        },
        {
            src: '/assets/stemup.png',
            alt: 'STEMup',
            title: 'STEMup Educational Foundation',
            subtitle: 'Ambassador'
        },
        {
            src: '/assets/postman.png',
            alt: 'Postman',
            title: 'Postman',
            subtitle: 'Student Expert'
        }
    ];

    return (
        <section className="logos-section">
            {logos.map((logo, index) => (
                <div key={index} className="logo-card">
                    <div className="logo-container">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={80}
                            height={80}
                            style={{
                                objectFit: 'contain',
                                width: '100%',
                                height: '100%'
                            }}
                            quality={100}
                        />
                    </div>
                    <h3 className="logo-title">{logo.title}</h3>
                    <p className="logo-subtitle">{logo.subtitle}</p>
                </div>
            ))}
        </section>
    );
};

export default Logos; 