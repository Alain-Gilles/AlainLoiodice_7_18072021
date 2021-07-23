import AxAllMessages from "../services/AxAllMessages";
import React from "react";
function GetAllMessages() {
  const [errMessage, setErrMessage] = React.useState("");
  const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  var trtValid = false;
  var messageList = [];
  var messageListParse = [];
  AxAllMessages(idls, idtoken)
    .then(function (response) {
      messageList = JSON.stringify(response.data);
      messageListParse = JSON.parse(messageList);
      trtValid = true;
      if ("AllMessage" in localStorage) {
        localStorage.removeItem("AllMessage");
      }
      localStorage.setItem("AllMessage", messageList);
      window.location.href = "/affichAllMessages";
    })
    .catch(function (error) {
      const errorData = error && error.response && error.response.data;
      setErrMessage(errorData.message);
      console.log(errorData);
    });
  return (
    <div>
      <p>Bonjour</p>
    </div>
  );
}

export default GetAllMessages;
