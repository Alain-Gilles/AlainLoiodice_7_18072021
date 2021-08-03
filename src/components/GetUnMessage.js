import AxUnMessage from "../services/AxUnMessage";
import React from "react";
import VerifConnect from "../services/VerifConnect";
function GetUnMessage(props) {
  VerifConnect();
  let id = props.match.params.id;
  let userId = props.match.params.userId;
  const [errMessage, setErrMessage] = React.useState("");
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;
  //const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  var trtValid = false;
  var message = [];
  var messageParse = [];
  AxUnMessage(idls, idtoken, id)
    .then(function (response) {
      message = JSON.stringify(response.data);
      messageParse = JSON.parse(message);
      trtValid = true;
      if ("UnMessage" in localStorage) {
        localStorage.removeItem("UnMessage");
      }
      localStorage.setItem("UnMessage", message);
      window.location.href = "/affichUnMessage";
    })
    .catch(function (error) {
      const errorData = error && error.response && error.response.data;
      setErrMessage(errorData.message);
      console.log(errorData);
    });
  // return (
  //   <div>
  //     <p>Bonjour</p>
  //   </div>
  // );
}

export default GetUnMessage;
