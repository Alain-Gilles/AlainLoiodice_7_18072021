import React from "react";
//
import AxAllOneMessComments from "../services/AxAllOneMessComments";
import { useState, useEffect } from "react";
import MessageItem from "./MessageItem";
import CommentItem from "./CommentItem";
import AxSupprComment from "../services/AxSupprComment";
import "../styles/AffichAllMessages.css";
import VerifConnect from "../services/VerifConnect";

function AffichUnMessage() {
  VerifConnect();
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;
  //const idls = localStorage.getItem("IdUser");
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

  function supprComm(id) {
    AxSupprComment(idls, idtoken, id)
      .then((response) => {
        window.location.href = "/affichUnMessage";
      })
      .catch((error) => {
        const errorData = error && error.response && error.response.data;
        setErrMessage(errorData.message);
        console.log(errorData);
      });
  }

  function modifComment(id, userId, content, createdAt, updatedAt, user) {
    console.log("id :", id);
    console.log("userId :", userId);
    console.log("content :", content);
    console.log("createdAt :", createdAt);
    console.log("updatedAt :", updatedAt);
    console.log("user :", user);
    const modifComm = {
      _id: id,
      _userId: userId,
      _content: content,
      _createdAt: createdAt,
      _updatedAt: updatedAt,
      _user: user,
    };
    let modifCommStringify = JSON.stringify(modifComm);
    localStorage.setItem("ModifUnComment", modifCommStringify);
    window.location.href = "/modifUnComment";
  }

  const [comments, setComments] = useState([]);
  const GetComments = (idmess, idls, idtoken) => {
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
      <p className="grp-AllMess-Ent grp-AllMess-Bonjour">Bonjour {pseudo}</p>
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
              createdAt={message.createdAt}
              updatedAt={message.updatedAt}
              user={message.user}
            />
            <button
              className="grp-AllMess-btn grp-AllMessComm-btn "
              onClick={handleClick2}
            >
              <p>Cr??at comment</p>
            </button>
          </div>
        </ul>
      </div>

      <div>
        <div>
          <h2 className="grp-AllMessComment">Commentaires</h2>
        </div>
        <ul className="grp-AllMess-list">
          {comments.map(
            ({ id, content, userId, createdAt, updatedAt, user }) => (
              <div className="grp-AllMess-bloc" key={id}>
                <CommentItem
                  id={id}
                  content={content}
                  userId={userId}
                  createdAt={createdAt}
                  updatedAt={updatedAt}
                  user={user}
                />

                {(isAdmin || idls == userId) && (
                  <button
                    className="grp-AllMess-btn grp-AllMess-btn-darkolivegreen"
                    onClick={() =>
                      modifComment(
                        id,
                        userId,
                        content,
                        createdAt,
                        updatedAt,
                        user
                      )
                    }
                  >
                    Modifier
                  </button>
                )}

                {(isAdmin || idls == userId) && (
                  // <button
                  //   className="grp-AllMess-btn grp-AllMess-btn-rouge"
                  //   onClick={() => supprUnComment(id, content)}
                  // >
                  <button
                    className="grp-AllMess-btn grp-AllMess-btn-rouge"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Etes vous certain de vouloir supprimer ce commentaire ?"
                        )
                      ) {
                        supprComm(id);
                      }
                    }}
                  >
                    Supprimer
                  </button>
                )}
              </div>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
// Afficher tous les messages
function handleClick(e) {
  e.preventDefault();
  window.location.href = "/allMessages";
}
// Cr??ation d'un commentaire
function handleClick2(e) {
  e.preventDefault();
  window.location.href = "/creatComment";
}

export default AffichUnMessage;
