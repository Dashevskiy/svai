import React from 'react';
import styles from '../styles/SvaiType.module.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const SvaiType = () => {

  return (
    <div className={[styles.container, roboto.className].join(' ')}>
        <div className={styles.mainCard}>
            <h5 className={styles.title}>Виды винтовых свай</h5>
            <p className={styles.desc}>Технология строительства фундаментов на винтовых сваях не является новой. В большинстве случаев в советское время эта технология применялась для строительства мостов, переходов, причалов, маяков.</p>
        </div>
        <div className={styles.card}>
            <div>
                <h5 className={styles.title}>Фундамент на сваях</h5>
                <p className={styles.desc}>Строительство это процесс, в основе которого лежит создание фундамента.</p>
            </div>
            <div className={styles.btn}>
                <ArrowRightAltIcon sx={{ color: 'white', backgroundColor: '#00215B' }}/>
            </div>
        </div>
        <div className={styles.card}>
            <div>
                <h5 className={styles.title}>Установка свай</h5>
                <p className={styles.desc}>Установка свай подразумевает процесс вкручивания свай на заданную глубину, для обеспечения ее несущей способности.</p>
            </div>
            <div className={styles.btn}>
                <ArrowRightAltIcon sx={{ color: 'white', backgroundColor: '#80C658' }}/>
            </div>
        </div>
        <div className={styles.card}>
            <div>
                <h5 className={styles.title}>Литые наконечники</h5>
                <p className={styles.desc}>Надежный, качественный фундамент – это основа и безопасность любого строения.</p>
            </div>
            <div className={styles.btn}>
                <ArrowRightAltIcon sx={{ color: 'white', backgroundColor: '#00215B' }}/>
            </div>
        </div>
    </div>
   )
}

export default SvaiType;