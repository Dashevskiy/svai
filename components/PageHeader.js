import React from 'react';
import styles from '../styles/PageHeader.module.scss';
import Box from '@mui/material/Box';

const PageHeader = ({image, title}) => {

  return (
    <div className={styles.container}>
        <Box  sx={{
              backgroundImage: `url(${image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: '230px',
              backgroundPposition: "center",
              zIndex: "-1",
            }}>
        </Box>
        <div className={styles.title}>{title}</div>
    </div>
   )
}

export default PageHeader;