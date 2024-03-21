import Link from "next/link";
import Button from "../components/Button";
import Head from "next/head";
import Layout from "../layouts/Layout";

const Index = () => {

  return (
    <Layout keywords={'main page'} title={'Main Page'}>
      <Link href={'/users'}>users page</Link>
      <h1>Main Page</h1>

      <Button/>
    </Layout>
   )
}

export default Index;