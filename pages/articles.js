import React from 'react';
import styles from '../styles/ArticlesPage.module.scss';
import Layout from "../layouts/Layout";
import ArticleCard from '../components/articleCard';
import { articles } from "../helpers/articleData";
import PageHeader from '../components/PageHeader';
import image from '../assets/contacts.png';

const Articles = () => {

  return (
    <Layout keywords={'Статті'} title={'Статті'}>
         <PageHeader image={image} title={'Статті'}/>
        <div className={styles.container}>
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