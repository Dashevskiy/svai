import React from 'react';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import { blogData } from "../../helpers/blogData";
import Layout from "../../layouts/Layout";
import PageHeader from '../../components/PageHeader';
import image from '../../assets/contacts.png';
import styles from '../../styles/BlogItem.module.scss';
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function Post() {
  const [post, setPost] = useState({});
  const router = useRouter();

  useEffect(() => {
    setPost(blogData.find((item)=>item.latin === router.query.latin))
    // ПЕРЕДЕЛАТЬ НА КОНКРЕТНЫЙ ЗАПРОС ПО КОНКРЕТНОЙ СТАТЬЕ, А НЕ СКАЧИВАТЬ ВСЕ СТАТЬИ КАК УКАЗАНО НИЖЕ

    // async function load() {
    //   const response = await fetch(`http://localhost:3000/article/${router.query.id}`);
    //   const data = await response.json();
    //   setArticle(data);
    // }

    // if (!serverArticle) {
    //   load();
    // }
  }, [])

  // if (!article) {
  //   return <>
  //     <p>Loading ...</p>
  //   </>
  // }

  return(
    <Layout keywords={'Стаття'} title={post.title}>
      <PageHeader image={image} title={'Статті'}/>
      <div className={`${styles.container} ${lato.className}`}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.text}>{post.text}</p>
      </div>
    </Layout>
  )
}