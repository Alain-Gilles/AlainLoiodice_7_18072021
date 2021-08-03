import "../styles/AffichAllMessages.css";
import "../styles/CreatMess.css";
import React from "react";
import AxCreatComm from "../services/AxCreatComm";
import MessageItem from "./MessageItem";
import VerifConnect from "../services/VerifConnect";

function CreatComment(props) {
  VerifConnect();
  const contentEl = React.useRef(null);

  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;
  //const idls = localStorage.getItem("IdUser");

  let message = [];
  let idmess = 0;
  if ("UnMessage" in localStorage) {
    message = localStorage.getItem("UnMessage");
    message = JSON.parse(message);
    idmess = message.id;
  }

  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  const [errMessage, setErrMessage] = React.useState("");

  let ctrlOk = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      content: contentEl.current.value,
      idmess: message.id,
    };
    setErrMessage("");

    if (formData.content === "") {
      setErrMessage("Vous devez saisir un commentaire");
      ctrlOk = false;
      return;
    }

    if (ctrlOk) {
      AxCreatComm(idls, idtoken, formData)
        .then(function (response) {
          window.location.href = "/affichUnMessage";
        })
        .catch(function (error) {
          const errorData = error && error.response && error.response.data;

          console.log(errorData);
          setErrMessage(errorData.message);
        });
    }
  };

  return (
    <div>
      <div className="grp-AllMess-Corps">
        <p className="grp-AllMess-Ent grp-AllMess-Bonjour">Bonjour {pseudo}</p>
        <h1 className="grp-AllMess-Ent">Message</h1>

        <div>
          <ul className="grp-AllMess-list">
            <div className="grp-AllMess-bloc" key={message.id}>
              <MessageItem
                id={message.id}
                title={message.title}
                content={message.content}
                objet={message.objet}
                imgUrl={message.imgUrl}
                userId={message.userId}
                createdAt={message.createdAt}
                updatedAt={message.updatedAt}
                user={message.user}
              />
            </div>
          </ul>
        </div>
      </div>

      <div className="blocCreatMess">
        <div className="creatMess">
          <h2 className="creatMessTitre">Ajout d'un commentaire</h2>
        </div>
        <form className="CreatMessForm" onSubmit={handleSubmit}>
          <label className="creatMesslabel" for="message">
            Entrez votre commentaire :
          </label>
          <textarea
            id="commentaire"
            name="commentaire"
            valeur="commentaire"
            className="creatMesstextarea"
            rows="20"
            ref={contentEl}
          />

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
    </div>
  );
}

function abandon() {
  window.location.href = "/affichUnMessage";
}

export default CreatComment;
