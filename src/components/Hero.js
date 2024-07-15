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
                <h2 className="featurette-heading fw-normal lh-1 pt-4"><span className={styles['font-text']}><strong>Isabela Munevar Escalante, Ph.D.</strong></span></h2>
                <p className="lead pt-4 px-2"><span className={styles['font-text']}>
                    I am a postdoctoral fellow at Harvard’s Center for International Development,
                    collaborating with Professor Asim Khwaja and Juan E. Saavedra on the Colombia
                    Education Initiative. I hold a PhD in Economics and Education from Columbia
                    University, as well as a BA and MA in Economics from Los Andes University in Bogotá,
                    Colombia. In the summer of 2025, I will join the Economics Department of Universidad
                    de Los Andes in Chile as an Assistant Professor of Economics.
                    <br /> <br />
                    I specialize in the convergence of Economics of Education with Political, Public, and
                    Development Economics. My most recent research is dedicated to uncovering how
                    various school models contribute value-added to students with diverse characteristics,
                    addressing the pivotal question of optimal educational environments.
                </span>
                </p>
            </div>
        </section>
    )
}

export default Hero