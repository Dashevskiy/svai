import React from 'react';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import styles from '../styles/Reviews.module.scss';
import Image from 'next/image';
import review from '../assets/review.png';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
    {
        id: 1,
        text: 'Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique',
        author: 'Иван Иванов'
    },
    {
        id: 2,
        text: 'Varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna.',
        author: 'Пётр Петров'
    },
    {
        id: 3,
        text: 'Tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices.',
        author: 'Леонид Луков'
    },
]

const Reviews = () => {

  var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

  return (
    <div className={styles.container}>
        <div className={styles.title}>ОТЗЫВЫ</div>
        <h4 className={styles.sub}>Отзывы наших клиентов</h4>
        <Slider {...settings}>
            {items.map((item)=>{
              return (
                <div className={styles.reviews} key={item.id}>
                    <Image
                        src={review}
                        width={200}
                        alt="review"
                        loading="lazy"
                    />
                    <div className={styles.info}>
                        <div><FormatQuoteIcon sx={{ color: 'white', backgroundColor: '#80C658', fontSize: '35px' }}/></div>
                        <p className={styles.text}>{item.text}</p>
                        <div className={styles.author}>{item.author}</div>
                    </div>
                </div>
              )
            })}
        </Slider>
        
    </div>
   )
}

export default Reviews;