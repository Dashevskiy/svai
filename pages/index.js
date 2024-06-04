import Link from "next/link";
import Button from "../components/Button";
import Head from "next/head";
import Layout from "../layouts/Layout";
import MySlider from "../components/Slider";
import About from "../components/About";

const Index = () => {

  return (
    <Layout keywords={'main page'} title={'Main Page'}>
      {/* <Link href={'/users'}>users page</Link> */}

      <MySlider/>
      <About/>

    </Layout>
   )
}

export default Index;