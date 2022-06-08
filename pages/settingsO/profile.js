import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
import { patchData } from "../../util/fetchData";
import valid from "../../util/valid";
import { ImageUpload } from "../../util/imageUpload";
import NavigationLeftO from "../../components/navigationO_after";
import styles from "../../styles/modules/afterlogin/profile.module.scss";
import Footer from "/components/footer";
import { BsCheckCircle } from "react-icons/bs";
import burgerstyles from "/styles/modules/afterlogin/burger_after.module.scss";
import { Router } from "react-router-dom";


// Profile page stylen, navigation sollte am besten gleich bleiben
// Style es wie du es willst

const Profile = () => {
  const initialState = {
    avatar: "",
    name: "",
    password: "",
    cf_password: "",
  };
  const [data, setData] = useState(initialState);
  const { avatar, name, password, cf_password } = data;
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, notify } = state;

  useEffect(() => {
    if (auth.user) setData({ ...data, name: auth.user.name });
  }, [auth.user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  // ------ Handles incoming changes on the profile ----

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (password) {
      const errMsg = valid(name, auth.user.email, password, cf_password);
      if (errMsg)
        return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
      updatePassword();
    }

    if (name !== auth.user.name || avatar) updateInfo();
    router.push("/organizer");
  };
  // ------------------------------------------

  const updateInfo = async () => {
    let media;

    if (avatar) media = await ImageUpload([avatar]);

    patchData(
      "user",
      {
        name,
        avatar: avatar ? media[0].url : auth.user.avatar,
      },
      auth.token
    ).then((res) => {
      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.err } });

      dispatch({
        type: "AUTH",
        payload: {
          token: auth.token,
          user: res.user,
        },
      });
      return dispatch({ type: "NOTIFY", payload: { success: res.success } });
    });
  };

  // ----- Reset Password Update -------

  const updatePassword = () => {
    dispatch({ type: "NOTIFY", payload: { loading: true } });
    patchData("user/resetPassword", { password }, auth.token).then((res) => {
      if (res.err)
        return dispatch({ type: "NOTIFY", payload: { error: res.msg } });
      return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    });
  };

  // -------------------------------

  const changeAvatar = (e) => {
    const file = e.target.files[0];
    if (!file)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "Diese Datei existiert nicht" },
      });

    if (file.size > 1024 * 1024 * 2)
      // 2MB
      return dispatch({
        type: "NOTIFY",
        payload: { error: "The maximum image size is 5MB." },
      });

    if (file.type !== "image/jpeg" && file.type !== "image/png")
      return dispatch({
        type: "NOTIFY",
        payload: {
          error: "Invalid file format. Only .jpeg and .png files are allowed!",
        },
      });

    console.log(file);
    setData({ ...data, avatar: file });
  };

  if (!auth.user) return null;
  const [clicked1, setClick] = useState(false);

  const toggleState = () => {
    if (clicked1) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  useEffect(() => {
    try {
      const inputpsw1 = document.querySelector("#password1");
      const inputpsw2 = document.querySelector("#password2");
      const confirm = document.querySelector("#divconfirm");
      // const checkbtn = document.querySelector("#check");
      // console.log(inputpsw1);
      console.log(confirm);

      if (clicked1) {
        inputpsw1.classList.remove("is_notthere");
        inputpsw2.classList.remove("is_notthere");
        inputpsw1.classList.add("is_there");
        inputpsw2.classList.add("is_there");
        confirm.classList.add("confirm_isnothere");
        confirm.classList.remove("confirm_ishere");
       
      } else {
        inputpsw1.classList.add("is_notthere");
        inputpsw2.classList.add("is_notthere");
        inputpsw1.classList.remove("is_there");
        inputpsw2.classList.remove("is_there");
        confirm.classList.remove("confirm_isnothere");
        confirm.classList.add("confirm_ishere");
      }
    } catch (error) {
      console.log(error);
    }
  }, [clicked1]);

  return (
    <div className={styles.wrapper}>
      <NavigationLeftO />

      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.art}></div>
      <div className={styles.art2}></div>
      <section>
        <div className={styles.griddi}>
          <div className={styles.flexdiv}>
            <div className={styles.itemtit}>
              <h1 className={styles.title}>
                {auth.user.role === "participator" ? (
                  <>
                    <i>Participator </i>
                    <>Profile</>
                  </>
                ) : auth.user.role === "organizer" ? (
                  <>
                    <i>Organizer </i>
                    <>Profile</>
                  </>
                ) : (
                  <>
                    <i>Admin </i>
                    <>Profile</>
                  </>
                )}
              </h1>
            </div>
            <div className={styles.itempic}>
              <div className={styles.imgart}></div>
              <div className={styles.propic} style={{}}>
                <img
                  src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar}
                  alt="avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />

                <span className={styles.changepic}>
                  <p>Change</p>
                  <input
                    className={styles.btchangepic}
                    type="file"
                    name="file"
                    id="file_up"
                    accept="image/*"
                    onChange={changeAvatar}
                  />
                </span>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.divinput}>
                <label className={styles.label} htmlFor="name">
                  Name
                </label>
                <input
                  className={styles.inputs}
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Your name"
                  onChange={handleChange}
                />
                <span className={styles.textspan}></span>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.divinput}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.inputs}
                  type="email"
                  name="email"
                  defaultValue={auth.user.email}
                  disabled={true}
                  placeholder="Your email"
                />
                <span className={styles.textspan}></span>
              </div>
            </div>
            <div className={styles.item} id="divconfirm">
              <div className={styles.divinput} id={styles.specialdivinput}>
                <label
                  className={styles.label}
                  id={styles.specialLabel2}
                  htmlFor="password"
                >
                  Confirm old password to change password
                </label>
                <div className={styles.group}>
                  <input
                    id="confirm_inp"
                    className={styles.inputs}
                    type="password"
                    name="password"
                    defaultValue={""}
                    disabled={false}
                    placeholder="Confirm old password"
                  />
                  <span className={styles.confirm}>
                    <BsCheckCircle
                    id="check"
                      className={styles.check}
                      onClick={toggleState}
                    ></BsCheckCircle>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.item} id="password1">
              <div className={styles.divinput}>
                <label className={styles.label} htmlFor="password">
                  New password
                </label>
                <input
                  className={styles.inputs}
                  type="password"
                  name="password"
                  value={""}
                  placeholder="Your new password"
                  onChange={handleChange}
                />
                <span className={styles.textspan}></span>
              </div>
            </div>
            <div className={styles.item} id="password2">
              <div className={styles.divinput}>
                <label id={styles.specialLabel} className={styles.label}>
                  Confirm new password
                </label>
                <input
                  className={styles.inputs}
                  type="password"
                  name="cf_password"
                  value={cf_password}
                  placeholder="Your new password"
                  onChange={handleChange}
                />
                <span className={styles.textspan}></span>
              </div>
            </div>
            <div className={styles.itembt}>
              <button
                disabled={notify.loading}
                onClick={handleUpdateProfile}
                className={styles.bt}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div className={styles.footer1}>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Profile;
