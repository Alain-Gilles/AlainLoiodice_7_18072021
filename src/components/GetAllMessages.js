import AxAllMessages from "../services/AxAllMessages";
import React from "react";
function GetAllMessages() {
  const [errMessage, setErrMessage] = React.useState("");
  //const id = localStorage.getItem("IdUser");
  const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  console.log("idls  ", idls);
  console.log("idtoken  ", idtoken);
  AxAllMessages(idls, idtoken)
    .then(function (response) {
      console.log(response);
      console.log(JSON.stringify(response.data));
      alert("JSON.stringify(response.data)  " + JSON.stringify(response.data));
      window.location.href = "/contact";
    })
    .catch(function (error) {
      const errorData = error && error.response && error.response.data;

      console.log(errorData);
      setErrMessage(errorData.message);
    });
}

export default GetAllMessages;
