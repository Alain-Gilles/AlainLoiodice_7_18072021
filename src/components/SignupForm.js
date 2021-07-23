import "../styles/SignupForm.css";
import React from "react";
//import axios from "axios";
import AxSignup from "../services/AxSignup";
import ValidMotPass from "../services/ValidMotPass";
import ValidEmail from "../services/ValidEmail";
import LocSto from "../services/LocSto";

function SignupForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const pseudoEl = React.useRef(null);
  const emailEl = React.useRef(null);
  const [errMessage, setErrMessage] = React.useState("");

  console.log("signup props.validAuth  ", props.validAuth);

  let trtValid = false;
  let ctrlOk = true;
  let trt = "Signup";
  let id = "";
  let token = "";
  //
  // Reinitialisation local storage token, id, Auth
  //
  LocSto(trt, id, token);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      pseudo: pseudoEl.current.value,
      email: emailEl.current.value,
    };
    setErrMessage("");
    if (formData.username == "") {
      setErrMessage("Veuillez saisir votre username");
      ctrlOk = false;
      return;
    }
    if (formData.password == "") {
      setErrMessage("Veuillez saisir un mot de passe");
      ctrlOk = false;
      return;
    }
    let objretour = {
      errmess: "",
      trtOk: false,
    };
    ValidMotPass(formData.password, objretour);
    if (!objretour.trtOk) {
      setErrMessage(objretour.errmess);
      return;
    }

    if (formData.pseudo == "") {
      setErrMessage("Vous n'avez pas entré de pseudo");
      ctrlOk = false;
      return;
    }
    if (formData.email == "") {
      setErrMessage("Vous n'avez pas entré votre email");
      ctrlOk = false;
      return;
    }
    if (!formData.email.includes("@")) {
      //alert("Attention, il n'y a pas d'@, dans votre email " + formData.email);
      setErrMessage(
        "Attention, il n'y a pas d'@, dans votre email " + formData.email
      );
      ctrlOk = false;
      return;
    }
    if (!ValidEmail(formData.email)) {
      setErrMessage("Veuillez saisir un email valide");
      ctrlOk = false;
      return;
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
        <div>
          <p>{errMessage}</p>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
