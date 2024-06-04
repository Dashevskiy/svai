import React from 'react';
import Box from '@mui/material/Box';
import styles from '../styles/About.module.scss';
import about from '../assets/about-img.png';

const About = () => {

  return (
    <div className={styles.container}>
        <div className={styles.features}>
            <div className={`${styles.card} ${styles.green}`}>
                <div className={styles.title}>147</div>
                <div className={styles.desc}>Сделанных проектов</div>
            </div>
            <div className={`${styles.card} ${styles.blue}`}>
                <div className={styles.title}>25+</div>
                <div className={styles.desc}>лет опыта</div>
            </div>
        </div>

        <div className={styles.info}>
            <div className={styles.infoContainer}>
                <Box sx={{color: '#80C658'}}>О НАС</Box>
                <h5 className={styles.infoHeadline}>Винтовые сваи производство, цена от производителя.</h5>
                <p className={styles.infoText}>Бурение ям под сваи, установка винтовых свай  в Киеве и по Украине. Коллектив, работающий под торговой маркой Ваши винтовые сваи, это люди профессионально подходящие к решению поставленных задач.</p>
                <button className={styles.button}>Подробнее</button>
            </div>
            <div className={styles.image}>
            <Box
              sx={{
                backgroundImage: `url(${about.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "400px",
                width: "330px",
                backgroundPposition: "center",
              }}>
            </Box>
            </div>
        </div>
    </div>
   )
}

export default About;