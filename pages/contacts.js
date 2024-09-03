import React from 'react';
import styles from '../styles/Contacts.module.scss';
import PageHeader from '../components/PageHeader';
import image from '../assets/contacts.png';
import Layout from "../layouts/Layout";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const Contacts = () => {

  return (
    <Layout keywords={'contacts'} title={'Контакти'}>
      <PageHeader image={image} title={'Контакти'}/>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.field}>
            <CallIcon style={{ fontSize: 60 }}/>
            <h1 className={styles.title}>Телефон</h1>
            <a href="tel:+380677368568" className={styles.txt}>+380677368568</a>
            <a href='tel:+380989717555' className={styles.txt}>+380989717555</a>
            <a href='tel:+380639507008' className={styles.txt}>+380639507008</a>
          </div>
          <div className={styles.field}>
            <EmailIcon className={styles.customIcon}/>
            <h1 className={styles.title}>Email</h1>
            <a href= "mailto: vvsvai4@gmail.com" className={styles.txt}>vvsvai4@gmail.com</a>
          </div>
          <div className={styles.field}>
            <LocationOnIcon className={styles.customIcon}/>
            <h1 className={styles.title}>Адреса</h1>
            <span className={styles.txt}>Україна, Київ, вулиця Будіндустрії, 6</span>
            <span className={styles.txt}>ВАТ "Експериментально-механічний завод"</span>
          </div>
          <div className={styles.field}>
            <QueryBuilderIcon className={styles.customIcon}/>
            <h1 className={styles.title}>Графік роботи</h1>
            <span className={styles.txt}>Пн. - пт. з 9:00 до 18:00</span>
            <span className={styles.txt}>Сб. з 10:00 до 16:00</span>
            <span className={styles.txt}>Нд. вихідний</span>
          </div>
        </div>
      </div>
    </Layout>
   )
}

export default Contacts;