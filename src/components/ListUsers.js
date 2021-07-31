import AxAllUsers from "../services/AxAllUsers";
import React from "react";
import { useState, useEffect } from "react";
import UserItem from "./UserItem";
//import "../styles/AffichAllMessages.css";

function ListUsers() {
  const [errMessage, setErrMessage] = React.useState("");
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  const isAdmin = connect.ad;
  const pseudo = connect.ps;

  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;

  const [users, setUsers] = useState([]);
  const GetUsers = (idls, idtoken) => {
    AxAllUsers(idls, idtoken)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        const errorData = error && error.response && error.response.data;
        setErrMessage(errorData.message);
        console.log(errorData);
      });
  };
  useEffect(() => {
    GetUsers(idls, idtoken);
  }, []);
  console.log("users[0]  ", users[0]);
  return (
    <div>
      <ul>
        {users.map(
          ({ id, username, pseudo, isAdmin, createdAt, updatedAt }) => (
            <div key={id}>
              <UserItem
                id={id}
                username={username}
                pseudo={pseudo}
                isAdmin={isAdmin}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
            </div>
          )
        )}
      </ul>
      <button type="button" onClick={abandon}>
        Abandon
      </button>
    </div>
  );
}
function abandon() {
  window.location.href = "/allMessages";
}
export default ListUsers;
