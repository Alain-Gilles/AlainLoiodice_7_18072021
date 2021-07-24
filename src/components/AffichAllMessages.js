import React from "react";
import MessageItem from "./MessageItem";
import "../styles/AffichAllMessages.css";
function AffichAllMessages() {
  let messageList = [];
  if ("AllMessage" in localStorage) {
    messageList = localStorage.getItem("AllMessage");
    messageList = JSON.parse(messageList);
  }

  console.log("messageList  ", messageList);

  function affichMessage(id, userId, title, content, objet, imgUrl) {
    alert(
      "fonction affich messages " +
        "id  " +
        id +
        "userId " +
        userId +
        "title " +
        title
    );
    let affichMessRoute = "/affichMessages/" + id + "/" + userId;
    //window.location.href = "/affichMessages/:id/:userId";
    alert(affichMessRoute);
    window.location.href = affichMessRoute;
  }

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
          {messageList.map(({ id, title, content, objet, imgUrl, userId }) => (
            // <MessageItem
            //   id={id}
            //   title={title}
            //   content={content}
            //   objet={objet}
            //   imgUrl={imgUrl}
            //   userId={userId}
            // />
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
  console.log("Le lien a été cliqué.");
  window.location.href = "/creatMessage";
}

export default AffichAllMessages;
