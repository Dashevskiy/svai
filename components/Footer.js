import React from 'react';
import styles from '../styles/Footer.module.scss';
import logo from '../assets/svai_white.svg';
import Image from 'next/image';
import Link from "next/link";
import Box from '@mui/material/Box';

const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.left}>
          <Image
            src={logo}
            width={80}
            height={30}
            alt="logo"
          />
        <div className={styles.contacts}>
          <a href="tel:+380677368568" className={styles.tel}>+38 (067) 736-85-68</a>
          <a href="tel:+380989717555" className={styles.tel}>+38 (098) 971-75-55</a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <div className={styles.services}>
            <ul className={styles.ul}>
              {/* <Link href={'/'} className={styles.btn}>Услуги</Link> */}
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Частное строительство</Link></li>
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Промышленное строительство</Link></li>
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Буровые работы</Link></li>
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Склоны и проблемные грунты</Link></li>
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Фундамент на воде</Link></li>
              <li className={styles.li}><Box sx={{ color: '#D4D7DD' }} className={styles.copy}>Svai© All rights reserved Copyrights 2024</Box></li>
            </ul>
          </div>
          <div className={styles.palies}>
            <ul className={styles.ul}>
              {/* <Link href={'/'} className={styles.btn}>Сваи</Link> */}
              <li className={styles.li}><Link href={'/'} className={styles.btn}>История винтовых свай</Link></li>
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Виды винтовых свай</Link></li>
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Фундамент на сваях</Link></li>
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Установка свай</Link></li>
              <li className={styles.li}><Link href={'/'} className={styles.btn}>Литые наконечники</Link></li>
            </ul>
          </div>
          <Link href={'/'} className={styles.btn}>Контакты</Link>
        </div>
        {/* <Box sx={{ color: '#D4D7DD' }} className={styles.copy}>Svai© All rights reserved Copyrights 2024</Box> */}
      </div>
    </div>
   )
}

export default Footer;