import React from "react";
import MessageItem from "./MessageItem";
import "../styles/AffichAllMessages.css";
import AxSupprMess from "../services/AxSupprMess";
import VerifConnect from "../services/VerifConnect";

//import AxModifMess from "../services/AxModifMess";

function SupprUnMessage() {
  VerifConnect();
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;
  //const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  let message = JSON.parse(localStorage.getItem("ModifUnMessage"));
  const [errMessage, setErrMessage] = React.useState("");

  function supprMess(id, userId) {
    AxSupprMess(idls, idtoken, id)
      .then(function (response) {
        window.location.href = "/allMessages";
      })
      .catch(function (error) {
        const errorData = error && error.response && error.response.data;
        setErrMessage(errorData.message);
      });
  }

  return (
    <div className="grp-AllMess-Corps">
      <h1 className="grp-AllMess-Ent">Suppression d'un Message</h1>
      <div className="grp-Onclick-btn">
        <button onClick={handleClick}>
          <p className="grp-p-btn">Afficher tous les messages</p>
        </button>
      </div>
      <div>
        <ul className="grp-AllMess-list">
          <div className="grp-AllMess-bloc" key={message.id}>
            <MessageItem
              id={message._id}
              title={message._title}
              content={message._content}
              objet={message._objet}
              imgUrl={message.imgUrl}
              userId={message._userId}
              createdAt={message._createdAt}
              updatedAt={message._updatedAt}
              user={message._user}
            />
            <button
              className="grp-AllMess-btn grp-AllMess-btn-rouge"
              onClick={() => {
                if (
                  window.confirm(
                    "Etes vous certain de vouloir supprimer ce message ?"
                  )
                ) {
                  supprMess(message._id, message._userId);
                }
              }}
            >
              Supprimer
            </button>

            <button className="grp-AllMess-btn" type="button" onClick={abandon}>
              Abandon
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

function abandon() {
  window.location.href = "/allMessages";
}

function handleClick(e) {
  e.preventDefault();
  window.location.href = "/allMessages";
}
export default SupprUnMessage;
