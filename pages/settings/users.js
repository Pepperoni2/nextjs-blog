import Head from "next/head";
import { useContext, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import Link from "next/link";
import Modal from "../../components/Modal"
import styles from "../../styles/modules/users_admin.module.scss";
import NavEvents from "../../components/NavEvents";
import { HiOutlineTrash } from "react-icons/hi";

const Users = () => {
  const { state, dispatch } = useContext(DataContext);
  const { users, auth, modal } = state;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const switchModal = () => {
    // if (isOpen) {
    //   setIsOpen(false);
    // } else {
      
    // }
    // setIsOpen(true);
    
  // }

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Users-Manager</title>
      </Head>
      <NavEvents></NavEvents>
      <Modal open={isOpen} onClose={closeModal}></Modal>
      <div className={styles.flexit}>
        <table className={styles.main}>
          <thead className={styles.headtabelle}>
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
          <tbody className={styles.bodytabelle}>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>{user._id}</th>
                <th>
                  <div>
                    <img
                      src={user.avatar}
                      alt={user.avatar}
                      
                    />
                  </div>
                </th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>
                  {user.role === "admin" ? (
                    user.root ? (
                      <i> Root</i>
                    ) : (
                      <i>yes</i>
                    )
                  ) : (
                    <i>no</i>
                  )}
                </th>
                <th>
                  <Link
                    href={
                      auth.user.root && auth.user.email !== user.email
                        ? `/settings/edit_user/${user._id}`
                        : `#!`
                    }
                  >
                    <a>link</a>
                  </Link>

                  {auth.user.root && auth.user.email !== user.email ? (
                    <HiOutlineTrash
                      onClick={()=>{
                        if (isOpen) {
                          setIsOpen(false);
                        } else {
                          dispatch({
                            type: "ADD_MODAL",
                            payload: {
                              data: users,
                              id: user._id,
                              title: user.name,
                              type: "ADD_USERS",
                              mode: "user",
                              option: "delete",
                            },
                          })
                        }
                        setIsOpen(true);

                      }}
                      className={styles.icon}
                    ></HiOutlineTrash>
                  ) : (
                    <HiOutlineTrash className={styles.icon}></HiOutlineTrash>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
