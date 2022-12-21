import React, { useState } from "react";
import { auth, db, storage } from "../firebase";
import Avataradd from "../img/addAvatar.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [file, setfile] = useState();
  const navigate = useNavigate();
  const [err, seterr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = name;
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email: email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            alert(err);
          }
        });
      });
    } catch (err) {
      alert(err);
      seterr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mass Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            name="name"
            placeholder="Enter the Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            name="password"
            placeholder="PassWord"
          />
          <input
            onChange={(e) => setfile(e.target.files[0])}
            name="files"
            style={{ display: "none" }}
            type="file"
            id="file"
          />
          <label htmlFor="file">
            <img src={Avataradd} alt="avatar" />
            <span>Add Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something Went Wrong...</span>}
        </form>
        <p>
          You Do Have An Account?<Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
