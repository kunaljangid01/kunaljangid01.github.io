import React from 'react';
import './HeroSection.css';
// import visdomLogo from '../../assets/visdom4.png';
// import visdomLogoNav from '../../assets/visdomnav6.png';
 
function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-section__logo"> 
                {/* <img src={visdomLogo} alt="Logo" /> */}
            </div>
            <div className="hero_section_about">
                <div className='about_inner_wrapper'>

                    <h1 style={{textAlign:'center'}}>Kunal Jangid</h1>


                    <h3 style={{ textAlign: 'center', color: '#444' }}>
                        PhD Research Scholar, IISER Bhopal
                    </h3>
                    <h4 style={{ textAlign: 'center', color: '#666', fontWeight: 'normal' }}>
                        Medical Imaging | Tumor & OARs Segmentation
                    </h4>

                    <p style={{ marginTop: '1rem', textAlign: 'justify' }}>
                        I am a PhD scholar at Indian Institute of Science Education and Research (IISER) Bhopal, Data Science & Engineering department. 
                        My research focuses on medical image segmentation—especially tumor and organ-at-risk (OAR) delineation. I had work on these tasks using techniques like frequency-based filtering, fuzzy logic, transformer, and uncertainty modeling.
                        I'm also exploring domain adaptation, encrypted learning, and multi-modal classification tasks in both vision domain.
                    </p>

                    <p style={{ marginTop: '1rem', textAlign: 'justify' }}>
                        I've previously contributed to real-world DICOM preprocessing and tumor & multi-organ segmentation, recommendation systems using sentiment and adversarial learning, 
                        and neural style transfer projects. My technical expertise spans PyTorch, Python, Deep Learning, Transformers, Frequency & Wavelet transforms, and medical imaging standards.
                    </p>


                    <div className="update-banner">
                        🚧 Website will be updated soon. Stay tuned! 🚧
                    </div>

                    {/* <div style={{ marginTop: '1.5rem' }}>
                        <h4><strong>Key Publications:</strong></h4>
                        <ul>
                            <li>
                                <strong>Point of Interest Recommendation System Using Sentiment Analysis</strong> — JISTaP, June 2024
                            </li>
                            <li>
                                <strong>Label Calibration in Source Free Domain Adaptation</strong> — WACV 2025
                            </li>
                        </ul>
                    </div> */}

                    {/* <div style={{ marginTop: '1.5rem' }}>
                        <p><strong>Email:</strong> <a href="mailto:kunal24@iiserb.ac.in">kunal24@iiserb.ac.in</a></p>
                        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kunal-jangid/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kunal-jangid</a></p>
                    </div> */}

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
    );
}

export default HeroSection;
