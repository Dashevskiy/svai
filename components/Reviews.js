import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import styles from '../styles/Reviews.module.scss';
import Image from 'next/image';
import review from '../assets/review.png'

const Reviews = () => {

  return (
    <div className={styles.container}>
        <div className={styles.title}>ОТЗЫВЫ</div>
        <h4 className={styles.sub}>Отзывы наших клиентов</h4>
        <div className={styles.reviews}>
            <Image
                src={review}
                width={200}
                alt="review"
                loading="lazy"
            />
            <div className={styles.info}>
                <div><FormatQuoteIcon sx={{ color: 'white', backgroundColor: '#80C658', fontSize: '35px' }}/></div>
                <p className={styles.text}>Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique</p>
                <div className={styles.author}>Иван Иванов</div>
            </div>
        </div>
    </div>
   )
}

export default Reviews;