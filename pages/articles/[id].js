import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../layouts/Layout";

export default function () {
    const router = useRouter();

    return (
        <Layout keywords={'user page'} title={`User Page: ${router.query.id}`}>
            <Link href={'/'}>main page</Link>
            <Link href={'/users'}>users page</Link>
            <div>User id: {router.query.id}</div>
        </Layout>
    )
}