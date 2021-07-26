import AxAllMessages from "../services/AxAllMessages";
import React from "react";
import { useState, useEffect } from "react";
import MessageItem from "./MessageItem";
import "../styles/AffichAllMessages.css";

function GetAllMessages() {
  const [errMessage, setErrMessage] = React.useState("");
  const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;

  function affichMessage(id, userId, title, content, objet, imgUrl) {
    let affichMessRoute = "/unMessage/" + id + "/" + userId;
    window.location.href = affichMessRoute;
  }

  const [messages, setMessages] = useState([]);
  const GetMessages = (idls, idtoken) => {
    console.log("Appel de set AxAllMessages");
    AxAllMessages(idls, idtoken)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        const errorData = error && error.response && error.response.data;
        setErrMessage(errorData.message);
        console.log(errorData);
      });
  };
  useEffect(() => {
    GetMessages(idls, idtoken);
  }, []);

  return (
    <div className="grp-AllMess-Corps">
      <h1 className="grp-AllMess-Ent">Messages</h1>
      <div className="grp-Onclick-btn">
        <button onClick={handleClick}>
          <p className="grp-p-btn">Création d'un nouveau message</p>
        </button>
      </div>
      <div>
        <ul className="grp-AllMess-list">
          {messages.map(({ id, title, content, objet, imgUrl, userId }) => (
            <div className="grp-AllMess-bloc" key={id}>
              <MessageItem
                id={id}
                title={title}
                content={content}
                objet={objet}
                imgUrl={imgUrl}
                userId={userId}
              />
              <button
                className="grp-AllMess-btn"
                onClick={() =>
                  affichMessage(id, userId, title, content, objet, imgUrl)
                }
              >
                Afficher
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
function handleClick(e) {
  e.preventDefault();
  window.location.href = "/creatMessage";
}
export default GetAllMessages;
