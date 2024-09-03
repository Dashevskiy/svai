import React from 'react';
import styles from '../styles/AboutPage.module.scss';
import PageHeader from '../components/PageHeader';
import image from '../assets/contacts.png';
import Layout from "../layouts/Layout";
import { Lato } from 'next/font/google';
import Gallery from '../components/Gallery';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const OurWorks = () => {

  return (
    <Layout keywords={'Services'} title={'Наші роботи'}>
      <PageHeader image={image} title={'Наші роботи'}/>
      <div className={`${styles.container} ${lato.className}`}>
        <Gallery/>
      </div>
    </Layout>
   )
}

export default OurWorks;