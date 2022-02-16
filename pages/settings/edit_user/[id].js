import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../store/GlobalState'
import { useRouter } from 'next/router'
import { patchData } from '../../../util/fetchData'

const EditUser = () => {
    const router = useRouter()
    const { id } = router.query

    const { state, dispatch } = useContext(DataContext)
    const { auth, users } = state

    const [editUser, setEditUser] = useState([])
    const [checkAdmin, setCheckAdmin] = useState(false)
    const [num, setNum] = useState(0)

    useEffect(() => {
        users.forEach(user => {
            if (user._id === id) {
                setEditUser(user)
                setCheckAdmin(user.role === 'admin' ? true : false)
            }
        })
    }, [users])

    const handleCheck = () => {
        setCheckAdmin(!checkAdmin)
        setNum(num + 1)
    }

    const handleSubmit = () => {
        let role = checkAdmin ? 'admin' : 'participator'
        if (num % 2 !== 0) {
            dispatch({ type: 'NOTIFY', payload: { loading: true } })
            patchData(`user/${editUser._id}`, { role }, auth.token)
            .then(res => console.log(res))
        }

    }

    return (
        <div>
            <Head>
                <title>Edit User</title>
            </Head>
            <div>
                <h2>Edit User {id}</h2>

                <div>
                    <button onClick={() => router.back()}>
                        Go Back
                    </button>
                </div>
                <div>
                    <label htmlFor="name" style={{color: 'brown'}}>Name</label>
                    <input type="text" id="name" defaultValue={editUser.name} disabled />
                </div>

                <div>
                    <label htmlFor="email" style={{color: 'brown'}}>Email</label>
                    <input type="text" id="email" defaultValue={editUser.email} disabled />
                </div>

                <div>
                    <input type="checkbox" id="isAdmin" checked={checkAdmin}
                        style={{ width: '20px', height: '20px' }}
                        onChange={handleCheck} />
                    <label htmlFor="isAdmin" style={{ color: 'brown', transform: 'translate(4px, -3px)' }}>IsAdmin</label>
                </div>

                <button onClick={handleSubmit}>Update</button>
            </div>

        </div>

    )
}

export default EditUser