import React from 'react';
import './ContactSection.css';
// import visdomLogo from '../../assets/visdom4.png';
// import visdomLogoNav from '../../assets/visdomnav6.png';

// import profileImage from '../../../public/images/kunal.png';

import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
function ContactSection() {
    return (
        <>
        <Navbar />
        <div className="contact-section">
            <div className="contact-section__logo"> 
                {/* <img src={visdomLogo} alt="Logo" /> */}
            </div>
            <div className="contact_section_about">
                <div className='contact_about_inner_wrapper'>

                    <h1 style={{textAlign:'center'}}>Kunal Jangid</h1>

                    {/* <img src={profileImage} alt="Kunal Jangid" className="profile-image" /> */}

                    {/* <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Kunal Jangid</h1> */}
                    <h3 style={{ textAlign: 'center', color: '#444' }}>PhD Research Scholar, IISER Bhopal</h3>
                    <h4 style={{ textAlign: 'center', color: '#666', fontWeight: 'normal' }}>Medical Imaging | Tumor & OARs Segmentation</h4>

                    {/* <p style={{ marginTop: '1rem', textAlign: 'justify' }}>
                        My work lies at the intersection of medical image segmentation, tumor and OAR delineation, and deep learning. I explore frequency, fuzzy, and uncertainty-based approaches for enhanced classification. My interests also include domain adaptation, encrypted learning, 3D medical data analysis, and vision + NLP applications.
                    </p> */}

                    <div style={{ marginTop: '1rem' }}>
                        <p><strong>Email:</strong> <a href="mailto:jangidkunal1999@gmail.com">jangidkunal1999@gmail.com</a></p>
                        <p><strong>Email:</strong> <a href="mailto:kunal24@iiserb.ac.in">kunal24@iiserb.ac.in</a></p>
                        <p><strong></strong> <a href="https://www.linkedin.com/in/kunal-jangid-3010nd1712/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>

                    <div>
                        {/* <p> <b>About the Group:  </b>
                            Our group tackles diverse challenges in the realm of computer vision(CV), deep learning(DL), and machine learning(ML). We continuously innovate at the intersection of these fields, driving progress and creating impactful solutions that shape the future.
                        </p> */}
                        <br /> {/* Add a break here */}
                        {/* <p><b>Some of the active areas of research include:</b>
                        </p> */}
{/* 
                        <ul style={{ listStyleType: 'disc' }}>
                            <li> Transfer learning (Domain adaptation, Incremental learning)</li>
                            <li> Fairness and bias-free learning</li>
                            <li> Uncertainty in deep learning (Bayesian models)</li>
                            <li>Data generative models (GANs, VAEs, and Diffusion models)</li>
                            <li> Efficient deep learning ( Binary neural networks, Active learning)</li>
                            <li>3D reconstructions, augmented reality (AR), and virtual reality (VR).</li>
                        </ul> */}
                        
                       
                        {/* Some other areas of interested in multimodal learning, speech and audio processing and medical machine learning. */}
                        <p></p>
                        <br /> {/* Add a break here */}
                        <p>
                            {/* We are seeking motivated researchers who are passionate about computer vision, machine learning, and deep learning. If you are interested, please send us your CV and highlight your areas of interest and experience. We have openings for junior research fellow/projects associates and PhDs in this groups. */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default ContactSection;
