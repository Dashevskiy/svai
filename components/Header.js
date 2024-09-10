import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import Box from '@mui/material/Box';
import logo from '../assets/svai.svg';
import styles from '../styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {

  return (
    <div className={styles.container}>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
        <Link href="/">
          <Image
            src={logo}
            width={160}
            height={60}
            alt="logo"
          />
        </Link>
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>
        <Link href="/">
          <Image
            src={logo}
            width={120}
            height={40}
            alt="logo"
          />
        </Link>
      </Box>

      <Box sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }}>
        <Image
          src={logo}
          width={80}
          height={30}
          alt="logo"
        />
      </Box>

      <div>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <div className={styles.telContainer}>
            <a href="tel:+380677368568" className={styles.tel}>+38 (067) 736-85-68</a>
            <a href="tel:+380989717555" className={styles.tel}>+38 (098) 971-75-55</a>
          </div>
        </Box>
        <Navbar/>
      </div>

    </div>
   )
}

export default Header;