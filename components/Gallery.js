import React from 'react';
import styles from '../styles/Gallery.module.scss';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

const Gallery = () => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>ГАЛЕРЕЯ</div>
      <h4 className={styles.sub}>Наші работи</h4>
      <ImageGallery items={images} />
    </div>
   )
}

export default Gallery;