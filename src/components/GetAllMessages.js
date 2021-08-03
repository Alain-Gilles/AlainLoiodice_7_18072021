import AxAllMessages from "../services/AxAllMessages";
import React from "react";
import { useState, useEffect } from "react";
import MessageItem from "./MessageItem";
import "../styles/AffichAllMessages.css";
import VerifConnect from "../services/VerifConnect";

function GetAllMessages() {
  VerifConnect();
  const [errMessage, setErrMessage] = React.useState("");
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;

  //const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  function affichMessage(
    id,
    userId,
    title,
    content,
    objet,
    imgUrl,
    createdAt,
    updatedAt,
    user
  ) {
    let affichMessRoute = "/unMessage/" + id + "/" + userId;
    window.location.href = affichMessRoute;
  }

  function modifMessage(
    id,
    userId,
    title,
    content,
    objet,
    imgUrl,
    createdAt,
    updatedAt,
    user
  ) {
    const modifMess = {
      _id: id,
      _userId: userId,
      _title: title,
      _content: content,
      _objet: objet,
      _imgUrl: imgUrl,
      _createdAt: createdAt,
      _updatedAt: updatedAt,
      _user: user,
    };
    let modifMessStringify = JSON.stringify(modifMess);
    localStorage.setItem("ModifUnMessage", modifMessStringify);
    window.location.href = "/modifUnMessage";
  }

  function supprMessage(
    id,
    userId,
    title,
    content,
    objet,
    imgUrl,
    createdAt,
    updatedAt,
    user
  ) {
    const modifMess = {
      _id: id,
      _userId: userId,
      _title: title,
      _content: content,
      _objet: objet,
      _imgUrl: imgUrl,
      _createdAt: createdAt,
      _updatedAt: updatedAt,
      _user: user,
    };
    let modifMessStringify = JSON.stringify(modifMess);
    localStorage.setItem("ModifUnMessage", modifMessStringify);
    window.location.href = "/supprUnMessage";
  }

  function affichListUsers() {
    window.location.href = "/listUsers";
  }

  const [messages, setMessages] = useState([]);
  const GetMessages = (idls, idtoken) => {
    AxAllMessages(idls, idtoken)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        const errorData = error && error.response && error.response.data;
        setErrMessage(errorData?.message);
        console.log(errorData);
      });
  };
  useEffect(() => {
    GetMessages(idls, idtoken);
  }, []);
  console.log("messages[0]  ", messages[0]);
  return (
    <div>
      {isAdmin && (
        <div>
          <button
            className="grp-AllMess-btn grp-AllMess-btn-Admn"
            onClick={() => affichListUsers()}
          >
            Users Liste
          </button>
        </div>
      )}
      <div className="grp-AllMess-Corps">
        <p className="grp-AllMess-Ent grp-AllMess-Bonjour">Bonjour {pseudo}</p>
        <h1 className="grp-AllMess-Ent">Messages</h1>
        <div className="grp-Onclick-btn">
          <button onClick={handleClick}>
            <p className="grp-p-btn">Création d'un nouveau message</p>
          </button>
        </div>
        <div>
          <ul className="grp-AllMess-list">
            {messages.map(
              ({
                id,
                title,
                content,
                objet,
                imgUrl,
                userId,
                createdAt,
                updatedAt,
                user,
              }) => (
                <div className="grp-AllMess-bloc" key={id}>
                  <MessageItem
                    id={id}
                    title={title}
                    content={content}
                    objet={objet}
                    imgUrl={imgUrl}
                    userId={userId}
                    createdAt={createdAt}
                    updatedAt={updatedAt}
                    user={user}
                  />
                  <button
                    className="grp-AllMess-btn"
                    onClick={() =>
                      affichMessage(
                        id,
                        userId,
                        title,
                        content,
                        objet,
                        imgUrl,
                        createdAt,
                        updatedAt,
                        user
                      )
                    }
                  >
                    Afficher
                  </button>
                  {/* Affichage bouton conditionner si Admin ou si le créateur du message est le  user connecté */}
                  {(isAdmin || idls == userId) && (
                    <button
                      className="grp-AllMess-btn grp-AllMess-btn-darkolivegreen"
                      onClick={() =>
                        modifMessage(
                          id,
                          userId,
                          title,
                          content,
                          objet,
                          imgUrl,
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
                    <button
                      className="grp-AllMess-btn grp-AllMess-btn-rouge"
                      onClick={() =>
                        supprMessage(
                          id,
                          userId,
                          title,
                          content,
                          objet,
                          imgUrl,
                          createdAt,
                          updatedAt,
                          user
                        )
                      }
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
    </div>
  );
}
function handleClick(e) {
  e.preventDefault();
  window.location.href = "/creatMessage";
}
export default GetAllMessages;
