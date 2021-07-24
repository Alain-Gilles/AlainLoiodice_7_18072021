import React from "react";
import MessageItem from "./MessageItem";
import "../styles/AffichAllMessages.css";

function AffichUnMessage() {
  let message = [];
  if ("UnMessage" in localStorage) {
    message = localStorage.getItem("UnMessage");
    message = JSON.parse(message);
  }
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
            {/* <button
                className="grp-AllMess-btn"
                onClick={() =>
                  affichMessage(id, userId, title, content, objet, imgUrl)
                }
              >
                Afficher
              </button> */}
          </div>
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

export default AffichUnMessage;
