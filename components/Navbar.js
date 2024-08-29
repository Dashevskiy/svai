import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import logo from '../assets/svai.svg';

const drawerWidth = 240;

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ padding: '20px 0' }}>
        <Image
          src={logo}
          width={80}
          height={30}
          alt="logo"
        />
      </Box>
     
      <Divider />
      <List>
      <ul className={`${styles.navbar} ${styles.mob}` }>
        <li><Link href="/">Головна</Link></li>
        <li><Link href="/">Палі</Link></li>
        <li><Link href="/">Послуги</Link></li>
        <li><Link href="/">Ціни</Link></li>
        <li><Link href="/">Про нас</Link></li>
        <li><Link href="/">Статті</Link></li>
        <li><Link href="/contacts">Контакти</Link></li>
      </ul>
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <ul className={styles.navbar}>
          <li className={styles.link116}><Link href="/">Головна</Link></li>
          <li className={styles.link116}><Link href="/">Палі</Link></li>
          <li className={styles.link116}><Link href="/">Послуги</Link></li>
          <li className={styles.link116}><Link href="/">Ціни</Link></li>
          <li className={styles.link116}><Link href="/">Про нас</Link></li>
          <li className={styles.link116}><Link href="/">Статті</Link></li>
          <li className={styles.link116}><Link href="/contacts">Контакти</Link></li>
        </ul>
      </Box>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 0, display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>



      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  )
}

export default Navbar;