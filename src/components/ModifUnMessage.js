import React from "react";
import "../styles/AffichAllMessages.css";
import "../styles/CreatMess.css";
import AxModifMess from "../services/AxModifMess";
import VerifConnect from "../services/VerifConnect";

function ModifUnMessage() {
  VerifConnect();
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;
  //const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  let message = JSON.parse(localStorage.getItem("ModifUnMessage"));
  const titleEl = React.useRef(null);
  const contentEl = React.useRef(null);
  const objetEl = React.useRef(null);
  const [errMessage, setErrMessage] = React.useState("");
  let ctrlOk = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: titleEl.current.value,
      content: contentEl.current.value,
      objet: objetEl.current.value,
      imgUrl: "",
    };
    setErrMessage("");
    if (formData.title == "") {
      setErrMessage("Veuillez saisir le titre du message");
      ctrlOk = false;
      return;
    }
    if (formData.content == "") {
      setErrMessage("Veuillez saisir le contenu de votre message");
      ctrlOk = false;
      return;
    }
    if (formData.objet == "") {
      setErrMessage("Veuillez saisir l'objet de votre message");
      ctrlOk = false;
      return;
    }
    if (ctrlOk) {
      AxModifMess(idls, idtoken, formData, message._id)
        .then(function (response) {
          window.location.href = "/allMessages";
        })
        .catch(function (error) {
          const errorData = error && error.response && error.response.data;
          setErrMessage(errorData.message);
        });
    }
  };

  return (
    <div className="blocCreatMess">
      <div className="creatMess">
        <h2 className="creatMessTitre">Modification d'un message</h2>
      </div>
      <form className="CreatMessForm" onSubmit={handleSubmit}>
        <label className="creatMesslabel" for="titre">
          Titre du message :
        </label>
        <input
          id="titre"
          name="titre"
          className="creatMessInput"
          type="text"
          defaultValue={message._title}
          ref={titleEl}
        />
        <label className="creatMesslabel" for="message">
          Entrez votre message :
        </label>
        <textarea
          id="message"
          name="message"
          valeur="message"
          className="creatMesstextarea"
          rows="20"
          defaultValue={message._content}
          ref={contentEl}
        />
        <label className="creatMesslabel" for="objet">
          Objet du message :
        </label>
        <select
          id="objet"
          name="objet"
          className="creatMessInput"
          type="select"
          defaultValue={message._objet}
          ref={objetEl}
        >
          <option value="actualité">actualité</option>
          <option value="culture">culture</option>
          <option value="découverte">découverte</option>
          <option value="découverte">divers</option>
          <option value="loisirs">loisirs</option>
          <option value="sports">sports</option>
          <option value="voyages">voyages</option>
        </select>

        <button
          className="CreatMessmyButton CreatMessmyButtonColordarkolivegreen"
          type="submit"
        >
          Modifier
        </button>
        {/* <button
          className="CreatMessmyButton CreatMessmyButtonColor"
          type="reset"
        >
          Reset
        </button> */}
        <button
          className="CreatMessmyButton CreatMessmyButtonColorred"
          type="button"
          onClick={abandon}
        >
          Abandon
        </button>
        <div>
          <p>{errMessage}</p>
        </div>
      </form>
    </div>
  );
}

function abandon() {
  window.location.href = "/allMessages";
}

export default ModifUnMessage;
