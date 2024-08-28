import Link from "next/link";
import Button from "../components/Button";
import Head from "next/head";
import Layout from "../layouts/Layout";
import MySlider from "../components/Slider";
import About from "../components/About";
import SvaiType from "../components/SvaiType";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const Index = () => {

  return (
    <div className={roboto.className}>
    <Layout keywords={'main page'} title={'Main Page'}>
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