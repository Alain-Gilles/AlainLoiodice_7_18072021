import "../styles/SignupForm.css";
import React from "react";
//import axios from "axios";
import AxSignup from "../services/AxSignup";

function SignupForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const pseudoEl = React.useRef(null);
  const emailEl = React.useRef(null);
  const [errMessage, setErrMessage] = React.useState("");

  let trtValid = false;
  let ctrlOk = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      pseudo: pseudoEl.current.value,
      email: emailEl.current.value,
    };
    if (!formData.email.includes("@")) {
      alert("Attention, il n'y a pas d'@, dans votre email " + formData.email);
      ctrlOk = false;
    }

    if (ctrlOk) {
      AxSignup(formData)
        .then(function (response) {
          console.log(response);
          console.log(JSON.stringify(response.data));
          window.location.href = "/login";
        })
        .catch(function (error) {
          const errorData = error && error.response && error.response.data;

          console.log(errorData);
          setErrMessage(errorData.message);
        });
    }
    //
    //
    // var axios = require("axios");
    // var data = JSON.stringify({
    //   formData,
    // });
    // console.log("data 1", data);

    //
    //
    //
  };
  if (trtValid)
    // retour a App.js en passant l'info que la création du profil est réussie
    return (
      <div>
        <h1>Traitement apres validation formulaire</h1>
      </div>
    );
  return (
    <div>
      <div className="creatProfil">
        <h2 className="creatProfilTitre">Création d'un profil utilisateur</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={nameEl} />
        <input type="password" placeholder="password" ref={passwordEl} />
        <input type="text" placeholder="pseudo" ref={pseudoEl} />
        <input type="text" placeholder="email" ref={emailEl} />
        <button type="submit" className="myButton">
          Signup
        </button>
      </form>
      <div>
        <h2 className="creatProfilErr">{errMessage}</h2>
      </div>
    </div>
  );
}

export default SignupForm;
