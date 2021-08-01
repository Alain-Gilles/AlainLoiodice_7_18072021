import "../styles/LoginForm.css";
import React from "react";
import AxLogin from "../services/AxLogin";
import LocSto from "../services/LocSto";
//******************/
import ValidEmail from "../services/ValidEmail";
//*****************/

function LoginForm(props) {
  // const pseudoEl = React.useRef(null);
  // const passwordEl = React.useRef(null);
  // const emailEl = React.useRef(null);
  //*****************/
  const pseudoEmailE1 = React.useRef(null);
  const passwordEl = React.useRef(null);
  //*****************/

  const [errMessage, setErrMessage] = React.useState("");

  let trtValid = false;
  let ctrlOk = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // pseudo: pseudoEl.current.value,
      // password: passwordEl.current.value,
      // email: emailEl.current.value,
      //*****************/
      password: passwordEl.current.value,
      pseudoEmail: pseudoEmailE1.current.value,
      //*****************/
    };
    setErrMessage("");
    let ConnectPseudo = "";
    let ConnectEmail = "";

    //*****************/

    // if (formData.pseudo == "" && formData.email == "") {
    //   //alert("Vous devez saisir un pseudo ou un email");
    //   setErrMessage("Vous devez saisir un pseudo ou un email");
    //   ctrlOk = false;
    //   return;
    // }
    // if (!formData.pseudo == "" && !formData.email == "") {
    //   //alert("Vous devez saisir soit un pseudo soit un email");
    //   setErrMessage("Vous devez saisir soit un pseudo soit un email");
    //   ctrlOk = false;
    //   return;
    // }
    // if (!formData.email == "") {
    //   if (!formData.email.includes("@")) {
    //     // alert(
    //     //   "Attention, il n'y a pas d'@, dans votre email " + formData.email
    //     // );
    //     setErrMessage(
    //       "Attention, il n'y a pas d'@, dans votre email " + formData.email
    //     );
    //     ctrlOk = false;
    //     return;
    //   }
    // }
    if (formData.pseudoEmail == "") {
      setErrMessage("Vous devez saisir un email ou un pseudo");
      ctrlOk = false;
      return;
    }
    if (!ValidEmail(formData.pseudoEmail)) {
      ConnectPseudo = formData.pseudoEmail;
      ConnectEmail = "";
    } else {
      ConnectPseudo = "";
      ConnectEmail = formData.pseudoEmail;
    }
    if (formData.password === "") {
      //*****************/
      // alert("Vous devez saisir un mot de passe");
      setErrMessage("Vous devez saisir un mot de passe");
      ctrlOk = false;
      return;
    }
    if (ctrlOk) {
      //*****************/
      const formData1 = {
        pseudo: ConnectPseudo,
        password: passwordEl.current.value,
        email: ConnectEmail,
      };
      //*****************/
      let trt = "Login";
      // AxLogin(formData);
      //*****************/
      AxLogin(formData1)
        //*****************/
        .then(function (response) {
          console.log(response);
          console.log(JSON.stringify(response.data));
          //
          // Mise à jour de l'id et du token dans local storage ?
          //
          LocSto(
            trt,
            response.data.userId,
            response.data.token,
            response.data.userIsAdmin,
            response.data.userPseudo
          );
          window.location.href = "/allMessages";
        })
        .catch(function (error) {
          const errorData = error && error.response && error.response.data;

          console.log(errorData);
          setErrMessage(errorData.message);
        });
    }
  };

  if (trtValid)
    return (
      <div>
        <h1>Traitement apres validation formulaire</h1>
      </div>
    );
  return (
    <div>
      <div className="loginProfil">
        <h2 className="loginProfilTitre">Connexion d'un utilisateur</h2>
      </div>
      <form className="loginProfilForm" onSubmit={handleSubmit}>
        {/* <input type="text" placeholder="pseudo" ref={pseudoEl} />
        <input type="text" placeholder="email" ref={emailEl} /> */}
        <input type="text" placeholder="pseudo ou email" ref={pseudoEmailE1} />
        <input type="password" placeholder="password" ref={passwordEl} />
        <button type="submit" className="myButton">
          Login
        </button>
        <div className="loginProfilErr">
          <p>{errMessage}</p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
