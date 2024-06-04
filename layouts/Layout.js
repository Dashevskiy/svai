import Head from 'next/head';
import React from 'react';
import {defaultKeywords} from '../helpers/meta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Layout.module.scss';

const Layout = ({children, keywords, title}) => {

  return (
    <>
      <Head>
          <meta keywords={`${keywords}, ${defaultKeywords.toString()}`}></meta>
          <title>{title}</title>
      </Head>
      <Header/>
      <div className={styles.children}>{children}</div>
      <Footer/>
    </>
   )
}

export default Layout;