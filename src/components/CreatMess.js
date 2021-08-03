import "../styles/CreatMess.css";
import React from "react";
import AxCreatMess from "../services/AxCreatMess";
import VerifConnect from "../services/VerifConnect";

function CreatMess(props) {
  VerifConnect();
  const titleEl = React.useRef(null);
  const contentEl = React.useRef(null);
  const objetEl = React.useRef(null);
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;
  //const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  const [errMessage, setErrMessage] = React.useState("");

  let ctrlOk = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: titleEl.current.value,
      content: contentEl.current.value,
      objet: objetEl.current.value,
    };
    setErrMessage("");

    if (formData.title === "") {
      setErrMessage("Vous devez saisir un titre");
      ctrlOk = false;
      return;
    }
    if (formData.content === "") {
      setErrMessage("Vous devez saisir un contenu");
      ctrlOk = false;
      return;
    }
    if (formData.objet === "") {
      setErrMessage("L'objet du message ets obligatoire");
      ctrlOk = false;
      return;
    }
    if (ctrlOk) {
      AxCreatMess(idls, idtoken, formData)
        .then(function (response) {
          console.log(response);
          console.log(JSON.stringify(response.data));
          console.log("response.data ", response.data);
          console.log("response.data.userId ", response.data.userId);
          window.location.href = "/allMessages";
        })
        .catch(function (error) {
          const errorData = error && error.response && error.response.data;

          console.log(errorData);
          setErrMessage(errorData.message);
        });
    }
  };

  return (
    <div className="blocCreatMess">
      <div className="creatMess">
        <h2 className="creatMessTitre">Création d'un message</h2>
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
          // placeholder="title"
          ref={titleEl}
        />
        {/* <input type="text" placeholder="content" ref={contentEl} /> */}
        <label className="creatMesslabel" for="message">
          Entrez votre message :
        </label>
        <textarea
          id="message"
          name="message"
          valeur="message"
          className="creatMesstextarea"
          rows="20"
          ref={contentEl}
        />
        <label className="creatMesslabel" for="objet">
          Objet du message :
        </label>
        {/* <input
          id="objet"
          name="objet"
          className="creatMessInput"
          type="text"
          // placeholder="objet"
          ref={objetEl}
        /> */}
        <select
          id="objet"
          name="objet"
          className="creatMessInput"
          type="select"
          // placeholder="objet"
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
          className="CreatMessmyButton CreatMessmyButtonColorgreen"
          type="submit"
        >
          Creation
        </button>
        <button
          className="CreatMessmyButton CreatMessmyButtonColordarkolivegreen"
          type="reset"
        >
          Reset
        </button>
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

export default CreatMess;
