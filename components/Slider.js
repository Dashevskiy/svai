import React from "react";
import Slider from "react-slick";
import Box from '@mui/material/Box';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from '../styles/Slider.module.scss';
import { sliderData } from "../helpers/slider";

export default function MySlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='top-slider'>
      <Slider {...settings}>
        {sliderData.map((item)=>{
          return (
            <div className={styles.sliderItem} key={item.id}>
              <Box className={styles.testimg}
                sx={{
                  backgroundImage: `url(${item.img.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100vw",
                  position: "absolute",
                  backgroundPposition: "center",
                  zIndex: "-1",
                }}>
              </Box>

              <div className={styles.sliderInfo}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
                <button className={styles.button}>{item.button}</button>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  );
}