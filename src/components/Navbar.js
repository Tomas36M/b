import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import cv from '../../public/cv.pdf'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand logo px-3" href='/'>
                        <span className={styles['font-text']}>
                            Isabela Munevar Escalante
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto nav-items">
                            <Link className="nav-link active" aria-current="page" href='/research'>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-secondary"><span className={styles['font-text']}>Research</span></button>
                                </li>
                            </Link>
                            <Link className="nav-link active" aria-current="page" href='/teaching'>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-outline-secondary"><span className={styles['font-text']}>Teaching</span></button>
                                </li>
                            </Link>
                            <div className="nav-link active">
                                <a href={cv} download="cv.pdf" className="btn btn-outline-primary">
                                    <span className={styles['font-text']}>Download CV</span>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar