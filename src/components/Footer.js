import React from 'react';
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <div className={`${styles['footer-dark']} footer mt-auto`}>
            <footer className='mt-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-3 item mb-3">
                            <h3>Links</h3>
                            <ul>
                                <li><a rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1-7FQISgfFtMCkf7RBzzbssxEuIuWUS8B/view?usp=sharing'>CV</a></li>
                                <li><a rel="noreferrer" target="_blank" href="mailto:isabela.munevar@gmail.com">Email</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item mb-3">
                            <h3>Links</h3>
                            <ul>
                                <li><a rel="noreferrer" target="_blank" href='https://twitter.com/munevar_isabela?lang=en'>Twitter</a></li>
                                <li><a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/isabela-munevar-236240208/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BM1tpHxw%2BSrSWIzkqNbsQPA%3D%3D'>LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>By Tomas Munevar</h3>
                            <ul>
                                <li><a rel="noreferrer" target="_blank" href='https://www.tomasmunevaresca.com'>Web Site</a></li>
                                
                            </ul>
                            {/* <div className="nav-link active">
                                <a href={cv} download="cv.pdf" className="btn btn-outline-primary">
                                    <span className={styles['font-text']}>CV</span>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
