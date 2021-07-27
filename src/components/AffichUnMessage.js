import React from "react";
//
import AxAllOneMessComments from "../services/AxAllOneMessComments";
import { useState, useEffect } from "react";
//
import MessageItem from "./MessageItem";
import CommentItem from "./CommentItem";
import "../styles/AffichAllMessages.css";

function AffichUnMessage() {
  const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  const [errMessage, setErrMessage] = React.useState("");

  let message = [];
  let idmess = 0;
  if ("UnMessage" in localStorage) {
    message = localStorage.getItem("UnMessage");
    message = JSON.parse(message);
    idmess = message.id;
  }

  const [comments, setComments] = useState([]);
  const GetComments = (idmess, idls, idtoken) => {
    console.log("Appel de set AxAllOneMessComments");
    AxAllOneMessComments(idmess, idls, idtoken)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        const errorData = error && error.response && error.response.data;
        setErrMessage(errorData.message);
        console.log(errorData);
      });
  };
  useEffect(() => {
    GetComments(idmess, idls, idtoken);
  }, []);

  return (
    <div className="grp-AllMess-Corps">
      <h1 className="grp-AllMess-Ent">Message</h1>
      <div className="grp-Onclick-btn">
        <button onClick={handleClick}>
          <p className="grp-p-btn">Afficher tous les messages</p>
        </button>
      </div>
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
            />
            <button
              className="grp-AllMess-btn grp-AllMessComm-btn"
              onClick={handleClick2}
            >
              <p>Création d'un commentaire</p>
            </button>
          </div>
        </ul>
      </div>

      <div>
        <div>
          <h2 className="grp-AllMessComment">Commentaires</h2>
        </div>
        <ul className="grp-AllMess-list">
          {comments.map(({ id, content, userId }) => (
            <div className="grp-AllMess-bloc" key={id}>
              <CommentItem id={id} content={content} userId={userId} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

function handleClick(e) {
  e.preventDefault();
  console.log("Le lien a été cliqué.");
  window.location.href = "/allMessages";
}

function handleClick2(e) {
  e.preventDefault();
  console.log("Le lien a été cliqué.");
  window.location.href = "/allMessages";
}

export default AffichUnMessage;
