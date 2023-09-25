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
                <p className="lead pt-4 px-2"><span className={styles['font-text']}>As an economist and Ph.D. candidate, I am devoted to researching and shaping education and labor market
                    policies, particularly emphasizing in gender, and income equality. I possess expertise in international
                    development and academia, aiming to connect academic research with actionable policy design. <br /><br /> I pride myself
                    on being a creative, resourceful individual with strong networking and collaboration abilities. My talent lies in
                    effectively communicating ideas and persuading others to join in bringing them to fruition.<br /><br /> Fields: Education, labor and development economics.</span>
                </p>
            </div>
        </section>
    )
}

export default Hero