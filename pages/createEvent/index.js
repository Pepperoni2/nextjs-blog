import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import NavigationLeft from "../../components/navigationO_after";
import styles from "../../styles/modules/afterlogin/createevents.module.scss";
import { postData } from "../../util/fetchData";
import { ImageUpload } from "../../util/imageUpload";
import { useRouter } from "next/router";
import Footer from "/components/footer";
import Link from "next/dist/client/link";
import Loading from "/components/Loading";

const OrgsEvent = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth, notify } = state;
  const initialState = {
    title: "",
    description: "",
    content: "",
    category: "",
    openslots: 0,
    organizer: auth.user.id,
    images: [{ public_id: "", url: "" }],
  };
  const [eventData, setData] = useState(initialState);
  const {
    title,
    description,
    content,
    category,
    openslots,
    organizer,
    images,
  } = eventData;

  const router = useRouter();

 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(auth).length !== 0) {
      setData({ ...eventData, name: auth.user.name });
    } else {
      router.push("/organizer");
    }
  }, [auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setData({ ...eventData, [name]: value });
  };

  // ----- Handling thumbnail input ----------------

  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    if (!file)
      return dispatch({
        type: "NOTIFY",
        payload: { error: "This file does not exist!" },
      });

    if (file.size > 1024 * 1024 * 2)
      // 2MB
      return dispatch({
        type: "NOTIFY",
        payload: { error: "The maximum image size is 2MB." },
      });

    if (file.type !== "image/jpeg" && file.type !== "image/png")
      return dispatch({
        type: "NOTIFY",
        payload: {
          error: "Invalid file format. Only .jpeg and .png files are allowed!",
        },
      });
    setData({ ...eventData, images: file });
  };

  // Image Handling
  const [imgsSrc, setImgsSrc] = useState([]);

  // const handleImages = (e) => {
  //   const file = e.target.files[0]; // six files
  //   console.log(file);
  //   if (!file)
  //     return dispatch({
  //       type: "NOTIFY",
  //       payload: { error: "This file does not exist!" },
  //     });

  //   if (file.size > 1024 * 1024 * 10)
  //     // 10MB
  //     return dispatch({
  //       type: "NOTIFY",
  //       payload: {
  //         error: "The maximum size of all images should not is 10MB.",
  //       },
  //     });

  //   if (file.type !== "image/jpeg" && file.type !== "image/png")
  //     return dispatch({
  //       type: "NOTIFY",
  //       payload: {
  //         error: "Invalid file format. Only .jpeg and .png files are allowed!",
  //       },
  //     });

  //   if (
  //     file.type == "image/jpeg" &&
  //     file.type == "image/png" &&
  //     file.size < 1024 * 1024 * 10
  //   ) {
  //     for (const file of e.target.files) {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         setImgsSrc((imgs) => [...imgs, reader.result]);
  //       };
  //       reader.onerror = () => {
  //         console.log(reader.error);
  //       };
  //     }
  //   }
  //   setData({ ...eventData, images: file });
  // };

  const createNewEvent = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (title && description && content && openslots) {
      setLoading(true);
      if (title.length > 50)
        return dispatch({
          type: "NOTIFY",
          payload: {
            error: "The title is too long. (Not longer than 50 characters!)",
          },
        });
      if (description.length < 10)
        return dispatch({
          type: "NOTIFY",
          payload: { error: "The description is too short" },
        });
      if (description.length > 50)
        return dispatch({
          type: "NOTIFY",
          payload: { error: "The description is too long" },
        });
      if (content.length < 10)
        return dispatch({
          type: "NOTIFY",
          payload: { error: "The content is too short" },
        });
      if (openslots <= 0)
        return dispatch({
          type: "NOTIFY",
          payload: {
            error: "The amount of openslots can't be zero or negative",
          },
        });

      let media;
      console.log(images)
      // if (images) media = await ImageUpload([images]);
      // setData({ ...eventData, organizer: auth.user.id });
      console.log(organizer)
      console.log(openslots)
      console.log(eventData)
      console.log(auth.user.id)
      const res = await postData(
        "create/newEvent",
        {
          title,
          description,
          content,
          category,
          openslots,
          organizer: auth.user.id,
          images: media,
        },
        eventData
      );

      if (res.err)
      setLoading(false);
        return dispatch({
          type: "NOTIFY",
          payload: { error: "An error in the event-creation has occured!" },
        });
      return dispatch({
        type: "NOTIFY",
        payload: { success: "Event created!" },
      });
    } else {
      setLoading(false);
      return dispatch({
        type: "NOTIFY",
        payload: { error: "Please fill out all the event fields!" },
      });
    }
  };

  useEffect(() => {
    const input1 = document.getElementById("inp1");
    const input2 = document.getElementById("inp2");
    const input3 = document.getElementById("inp3");
    const input4 = document.getElementById("inp4");
    const input5 = document.getElementById("inp5");

    input1.addEventListener("change", () => {
      const span1 = document.getElementById("span1");

      if (input1 && input1.value) {
        span1.style.width = "100%";
      } else {
        span1.style.width = null;
      }
    });
    input2.addEventListener("change", () => {
      const span2 = document.getElementById("span2");

      if (input2 && input2.value) {
        span2.style.width = "100%";
      } else {
        span2.style.width = null;
      }
    });
    input3.addEventListener("change", () => {
      const span3 = document.getElementById("span3");

      if (input3 && input3.value) {
        span3.style.width = "100%";
      } else {
        span3.style.width = null;
      }
    });
    // input4.addEventListener("change", () => {
    //   const span4 = document.getElementById("span4");

    //   if (input4 && input4.value) {
    //     span4.style.width = "100%";
    //   } else {
    //     span4.style.width = null;
    //   }
    // });
    input5.addEventListener("change", () => {
      const span5 = document.getElementById("span5");

      if (input5 && input5.value) {
        span5.style.width = "100%";
      } else {
        span5.style.width = null;
      }
    });
  });
  const [clicked, setClick] = useState(false);

  const toggleState = () => {
    if (clicked) {
      setClick(false);
    } else {
      handleChange();
      setClick(true);
    }
  };

  useEffect(() => {
    var select = document.getElementById("options");
    var value = select.options[select.selectedIndex].value;
    // console.log(value); // en
  }, [clicked]);

  useEffect(() => {
    const body = document.querySelector("body");
    
   if(loading){
    console.log("on");
    body.style.overflow = "visible";
   }
   else{
    console.log("off");
    body.style.overflow = "hidden";

   }
    
  }, [loading]);

  return (
    <div className={styles.wrapper}>
      <Loading loading={loading} />
      <Link href="/organizer">
        <a className={styles.back}>Back</a>
      </Link>
      <NavigationLeft />
      <Head>
        <title>Create Portal</title>
      </Head>
      <div className={styles.section1}>
        <div className={styles.headline}>
          {Object.keys(auth).length === 0 ? (
            <div></div>
          ) : (
            <h2 className={styles.username}>{auth.user.name}'s own Event</h2>
          )}
          <h3 className={styles.desc}>
            Here you can create your own event and publish it, to display it on
            the EventX Webpage to promote your event to other participants.
          </h3>
        </div>
        <section classname={styles.wrappersection1}>
          <div className={styles.inputflex}>
            <div className={styles.inputsec}>
              <label htmlFor="title" className={styles.titlelabel}>
                Title
              </label>
              <input
                className={styles.inputs}
                type="text"
                name="title"
                value={title}
                placeholder="Title of your Event"
                onChange={handleChange}
                id="inp1"
              />
              <span className={styles.textspan} id="span1"></span>
            </div>

            <div className={styles.inputsec}>
              <label htmlFor="description" className={styles.descriptionlabel}>
                Describtion of the event
              </label>
              <input
                className={styles.inputs}
                type="text"
                name="description"
                value={description}
                placeholder="Description"
                onChange={handleChange}
                id="inp2"
              />
              <span className={styles.textspan} id="span2"></span>
            </div>
            <div className={styles.inputsec}>
              <label htmlFor="content" className={styles.contentlabel}>
                Information about the event
              </label>
              <input
                className={styles.inputs}
                type="text"
                name="content"
                value={content}
                placeholder="Content"
                onChange={handleChange}
                id="inp3"
              />
              <span className={styles.textspan} id="span3"></span>
            </div>
            {/* Hier wäre es nice wenn wir so verschieden Panels hätten, 
                    wo man die Kategorie auswählen könnte,
                    wie z.B. Erholung, Party, Schulung usw. */}

            <div className={styles.inputsec}>
              <label htmlFor="category" className={styles.categorylabel}>
                Category
              </label>
              <select className={styles.list} id="options">
                <option
                  value="House-Party"
                  name="category"
                  onClick={()=>{
                    console.log("Banna")
                    setData({ ...eventData, category: "House-Party" });

                  }}
                >
                  House-Party
                </option>
                <option value="Concert" name="category" onClick={handleChange}>
                  Concert
                </option>
                <option value="Festival" name="category" onClick={handleChange}>
                  Festival
                </option>
              </select>
              
              {/* <input
                className={styles.inputs}
                type="text"
                name="category"
                value={category}
                placeholder="Category"
                onChange={handleChange}
                id="inp4"
              />
              <span className={styles.textspan} id="span4"></span> */}
            </div>

            <div className={styles.inputsec}>
              <label htmlFor="openslots" className={styles.openslotslabel}>
                Openslots
              </label>
              <input
                className={styles.inputs}
                type="number"
                name="openslots"
                value={openslots}
                placeholder="Open slots"
                onChange={handleChange}
                id="inp5"
              />
              <span className={styles.textspan} id="span5"></span>
            </div>
          </div>
          {/* Thumbnail  */}
          <div className={styles.flexthis}>
            <div className={styles.thumbnail}>
              <label htmlFor="images" className={styles.thumbnaillabel}>
                Thumbnail
              </label>
              <input
                type="file"
                name="images"
                accept="image/*"
                onChange={handleThumbnail}
              />
            </div>
            {/* Event-Images */}
            {/* <div className={styles.eventimages}>
              <label htmlFor="images" className={styles.eventimageslabel}>
                Images of your Event
              </label>
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                onChange={handleImages}
              />
            </div> */}
            <div className={styles.itembt}>
              <a
                disabled={notify.loading}
                onClick={createNewEvent}
                className={styles.button}
              >
                Create
              </a>
            </div>
          </div>
        </section>
        <div className={styles.footer1}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OrgsEvent;
