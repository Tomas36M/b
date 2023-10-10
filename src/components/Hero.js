import React from 'react'
import HeroPic from "../assets/foto-bela.jpg"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Hero = () => {
    return (
        <section className="row p-4">
            <div className="heroimg-cont col-md-5 order-md-1">
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                        src={HeroPic}
                        alt='img'
                        layout="responsive" // Use "responsive" for the new layout value
                        width={'100%'} // Set the actual width of your image
                        height={'100%'} // Set the actual height of your image
                        objectFit='contain'
                    />
                </div>
            </div>
            <div className="col-md-7 order-md-2 p-3 text-center">
                <h2 className="featurette-heading fw-normal lh-1 pt-4"><span className={styles['font-text']}><strong>Isabela Munevar Escalante</strong></span></h2>
                <p className="lead pt-4 px-2"><span className={styles['font-text']}>I&#39;m a Ph.D. Candidate in Economics and Education at Columbia University, guided by Professors
                    Sarah Cohodes, Christian Popeleches, and Peter Bergman. My research centers on Development
                    and Education/Labor Economics.<br/><br/>
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