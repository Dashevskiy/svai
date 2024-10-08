import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';
import styles from '../styles/BlogCard.module.scss';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function BlogCard({item}) {

  return (
    <Box className={`${styles.container} ${lato.className}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              А
            </Avatar>
          }
          title="Адміністратор Ваші палі"
          subheader={item.date}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.img.src}
          alt="зимове будівництво"
        />
        <CardContent>
          <div className={styles.title}>
              {item.title}
          </div>
          <div className={styles.subtitle}>
              {item.subtitle} 
          </div>
          <Link href={`/blog/${item.latin}`} className={styles.details}> Детальніше</Link>
        </CardContent>
      </Card>
    </Box>
  );
}