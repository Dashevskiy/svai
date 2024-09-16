import React from 'react';
import styles from '../styles/BlogPage.module.scss';
import Layout from "../layouts/Layout";
import BlogCard from '../components/blogCard';
import { blogData } from "../helpers/blogData";
import PageHeader from '../components/PageHeader';
import image from '../assets/contacts.png';

const BlogPage = () => {

  return (
    <Layout keywords={'Статті'} title={'Статті'}>
        <PageHeader image={image} title={'Статті'}/>
        <div className={styles.container}>
            {blogData.map((item)=>{
                return (
                    <BlogCard item={item} key={item.id}/>
                )
            })}
        </div>
    </Layout>
   )
}

export default BlogPage;