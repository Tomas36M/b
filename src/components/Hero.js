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
                <p className="lead pt-4 px-2"><span className={styles['font-text']}>
                I am a Ph.D. Candidate in Economics and Education at Columbia University, under the guidance of Professors Sarah Cohodes, Christian Popeleches, Judith-Scott Clayton, and Peter Bergman. My expertise lies in the intersection of Economics of Education, Labor, and Development Economics. I am in the job market during the 2023-24 academic year.<br/><br/>
                My research centers on school choice programs, specifically examining the impact of attending Catholic-run institutions—the world's largest non-governmental school network—compared to secular and public schools. I'm dedicated to understanding how different school models generate value-added for students with diverse characteristics, answering the crucial question of which school is best suited for whom. Additionally, I specialize in designing and evaluating low-cost, effective complementary school programs to enhance student retention, reduce school absenteeism, and improve learning outcomes, particularly in schools serving marginalized communities.
                </span>
                </p>
            </div>
        </section>
    )
}

export default Hero