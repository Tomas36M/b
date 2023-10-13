import React from 'react'
import HeroPic from "../assets/foto-bela.jpg"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Hero = () => {
    return (
        <section className="row p-4">
            <div className="col-md-5 order-md-1">
                <div>
                    <Image
                        src={HeroPic}
                        alt='isabela-munevar-pic'                        
                    />
                </div>
            </div>
            <div className="col-md-7 order-md-2 p-3 text-center">
                <h2 className="featurette-heading fw-normal lh-1 pt-4"><span className={styles['font-text']}><strong>Isabela Munevar Escalante</strong></span></h2>
                <p className="lead pt-4 px-2"><span className={styles['font-text']}>I am a Ph.D. Candidate in Economics and Education at Columbia University, under the guidance of Professors Sarah Cohodes, Christian Popeleches, and Peter Bergman. My research focuses on Applied Microeconomics, Development, and Labor Economics.<br/><br/>
                    Previously, I contributed to education and social protection projects in Latin America and the
                    Caribbean at the Interamerican Development Bank. Additionally, I served for over two years as a
                    teacher assistant and instructor at Los Andes University in Bogota, Colombia, teaching
                    microeconomics and introduction to economics.</span>
                </p>
            </div>
        </section>
    )
}

export default Hero