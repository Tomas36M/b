import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const Teaching = () => {
    return (
        <>
            <Head>
                <title>Isabela Munevar Escalante - Teaching Experience</title>
                <meta name="description" content="Welcome to the official website of Isabela Munevar Escalante, an Economics Ph.D. student. Explore her research, publications, and academic journey." />
                <meta name="author" content="Isabela Munevar Escalante" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Open+Sans:ital,wght@1,300&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={`${styles['teaching']} ${styles['font-text']} p-2`}>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Columbia University - NewYork, USA
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <ul>
                                    <li>Aug 2019 – Dec 2019 - Teacher Assistant of the Professor Judith Scott-Clayton, Economics and Education (Master’slevel). Teachers College, Columbia University, New York, United States.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                Los Andes University - Bogota, Colombia
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <ul>
                                    <li>Jan 2015 – June 2017 - Teacher Assistant of the Professor Guillermo Perry, Introduction to Colombian Economy(Undergraduate level), Los Andes University, Bogotá, Colombia.</li>
                                    <li>Aug 2014 – Dec 2015 - Teacher Assistant of the Professor David Bardey, Introduction to Microeconomics
                                        Undergraduate level), Los Andes University, Bogotá, Colombia.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teaching