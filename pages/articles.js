import React from 'react';
// import styles from '../styles/Articles.module.scss';
import Layout from "../layouts/Layout";
import ArticleCard from '../components/articleCard';
import { articles } from "../helpers/articleData";

const Articles = () => {

  return (
    <Layout keywords={'Статті'} title={'Статті'}>
        <div>
            {articles.map((article)=>{
                return (
                    <ArticleCard article={article} key={article.id}/>
                )
            })}
           
        </div>
    </Layout>
   )
}

export default Articles;