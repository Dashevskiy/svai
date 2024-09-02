import Link from "next/link";
import Button from "../components/Button";
import Head from "next/head";
import Layout from "../layouts/Layout";
import MySlider from "../components/Slider";
import About from "../components/About";
import SvaiType from "../components/SvaiType";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const Index = () => {

  return (
    <div className={lato.className}>
    <Layout keywords={'main page'} title={'Головна сторінка'}>
      {/* <Link href={'/users'}>users page</Link> */}

      <MySlider/>
      <About/>
      <SvaiType/>
      <Gallery/>
      <Reviews/>

    </Layout>
    </div>
   )
}

export default Index;