import Head from 'next/head';
import React from 'react';

const Layout = ({children, keywords, title}) => {

  return (
    <>
      <Head>
          <meta keywords={`svai, ${keywords}`}></meta>
          <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
   )
}

export default Layout;