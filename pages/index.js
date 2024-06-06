import Link from "next/link";
import Button from "../components/Button";
import Head from "next/head";
import Layout from "../layouts/Layout";
import MySlider from "../components/Slider";
import About from "../components/About";
import SvaiType from "../components/SvaiType";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";

const Index = () => {

  return (
    <Layout keywords={'main page'} title={'Main Page'}>
      {/* <Link href={'/users'}>users page</Link> */}

      <MySlider/>
      <About/>
      <SvaiType/>
      <Gallery/>
      <Reviews/>

    </Layout>
   )
}

export default Index;