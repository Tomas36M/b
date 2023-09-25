import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AcordionsResearch from '@/components/AcordionsResearch';

const AccordionView = () => {
    return (
        <>
            <Head>
                <title>Isabela Munevar Escalante - Research Page</title>
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
            <main className={`${styles.main} ${styles['font-text']} p-2`}>
                <AcordionsResearch />
            </main>
        </>
    );
};

export default AccordionView;
