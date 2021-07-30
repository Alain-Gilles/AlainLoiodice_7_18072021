import React from "react";
import AxAllUsers from "../services/AxAllUsers";

function GetAllUsers() {
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;
  //const idls = localStorage.getItem("IdUser");
  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;
  const [errMessage, setErrMessage] = React.useState("");

  var userList = [];
  var userListParse = [];
  var dataList = [];
  let user = {
    id: 0,
    username: "",
    pseudo: "",
  };
  AxAllUsers(idls, idtoken)
    .then(function (response) {
      userList = JSON.stringify(response.data);
      userListParse = JSON.parse(userList);
      //////////////
      for (var i = 0; i < userListParse.length; i++) {
        const user = new Object();
        user.pseudo = userListParse[i].pseudo;
        user.id = userListParse[i].id;
        user.username = userListParse[i].username;
        user.pseudo = userListParse[i].pseudo;
        dataList[i] = user;
      }
      let userStringify = JSON.stringify(dataList);
      //////////////
      if ("AllUser" in localStorage) {
        localStorage.removeItem("AllUser");
      }
      localStorage.setItem("AllUser", userStringify);

      window.location.href = "/allMessages";
    })
    .catch(function (error) {
      const errorData = error && error.response && error.response.data;
      setErrMessage(errorData.message);
      console.log(errorData);
    });
}

export default GetAllUsers;
