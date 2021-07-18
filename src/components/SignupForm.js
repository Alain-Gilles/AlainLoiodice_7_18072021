import "../styles/SignupForm.css";
import React from "react";

function SignupForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const pseudoEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);

  let trtValid = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      pseudo: pseudoEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    };
    if (!formData.username.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, dans votre username " + formData.username
      );
    }
    console.log(formData);
  };
  if (trtValid)
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
        <label>
          <input type="checkbox" ref={rememberMeEl} />
          Remember me
        </label>
        <button type="submit" className="myButton">
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
