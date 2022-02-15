import Head from 'next/head'
import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import Link from 'next/link'

const Users = () => {
    const { state, dispatch } = useContext(DataContext)
    const { users, auth } = state
    return (
        <div>
            <Head>
                <title>Users-Manager</title>
            </Head>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={user._id} style={{cursor: 'pointer'}}>
                                <th>{index + 1}</th>
                                <th>{user._id}</th>
                                <th>
                                    <img src={user.avatar} alt={user.avatar}
                                    style={{width: '30px', 
                                    height: '30px', 
                                    overflow: 'hidden',
                                    objectFit: 'cover'
                                    }}/>
                                </th>
                                <th>{user.name}</th>
                                <th>{user.email}</th>
                                <th>
                                    {
                                        user.role === 'admin'
                                        ? user.root ? <i> yes</i> 
                                                    : <i></i>
                                        :<i>no</i>
                                    }
                                </th>
                                <th>
                                    <Link href={
                                        auth.user.root && auth.user.email || user.email 
                                        ? `/settings/edit_user/${user._id}` : `#!`
                                    }>
                                        <a><i>link</i></a>
                                    </Link>

                                    {
                                        auth.user.root && auth.user.email || user.email
                                        ? <i>X</i>
                                        : <i>X</i>
                                    }
                                </th>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Users