import React from 'react';
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div className={`${styles['footer-dark']} footer mt-auto`}>
            <footer className='mt-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Links</h3>
                            <ul>
                                <li><a rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1-Yni7X1kPxmE9eT-vifE3ahov8u1_5QM/view?usp=sharing'>CV</a></li>
                                <li><a rel="noreferrer" target="_blank" href="mailto:isabela.munevar@gmail.com">Email</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Links</h3>
                            <ul>
                                <li><a rel="noreferrer" target="_blank" href='https://twitter.com/munevar_isabela?lang=en'>Twitter</a></li>
                                <li><a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/isabela-munevar-236240208/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BM1tpHxw%2BSrSWIzkqNbsQPA%3D%3D'>LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Created by Tomas Munevar</h3>
                            <ul>
                                <li><a rel="noreferrer" target="_blank" href='https://www.tomasmunevaresca.com'>Web Site</a></li>
                                <li><a rel="noreferrer" target="_blank" href='mailto:tomasmunevar36@gmail.com'>Want a web page? Email me</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
