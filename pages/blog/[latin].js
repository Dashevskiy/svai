import React from 'react';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import { articles } from "../../helpers/articleData";
import Layout from "../../layouts/Layout";

export default function Article() {
  const [article, setArticle] = useState({});
  const router = useRouter();

  useEffect(() => {
    setArticle(articles.find((item)=>item.latin === router.query.latin))
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
    <Layout keywords={'Стаття'} title={article.title}>
      <h1>{article.title}</h1>
      <hr />
      <p>{article.text}</p>
    </Layout>
  )
}