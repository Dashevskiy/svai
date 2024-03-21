import Link from "next/link";
import { useState } from "react";
import Layout from "../layouts/Layout";

const Users = () => {

    const [ users, setUsers ] = useState([
        {
            id: 1,
            name: 'Petya'
        },
        {
            id: 2,
            name: 'Vasya'
        }
    ])

  return (
    <Layout keywords={'users page'} title={'Users Page'}>
      <Link href={'/'}>main page</Link>
      <h1>Users Page</h1>
      <ul>
        {users.map(user=>
            <li key={user.id}>
                <Link href={`/users/${user.id}`}>
                    {user.name}
                </Link>
            </li>
        )}
      </ul>
    </Layout>
   )
}

export default Users;