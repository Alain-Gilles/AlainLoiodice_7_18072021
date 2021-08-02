import AxAllUsers from "../services/AxAllUsers";
import AxSupprUser from "../services/AxSupprUser";
import React from "react";
import { useState, useEffect } from "react";
import UserItem from "./UserItem";
import "../styles/UserListItem.css";

function ListUsers() {
  const [errMessage, setErrMessage] = React.useState("");
  const connect = JSON.parse(localStorage.getItem("Connect"));
  const idls = connect.id;
  // const isAdmin = connect.ad;
  // const pseudo = connect.ps;

  const idtokenls = localStorage.getItem("tokenUser");
  const idtoken = "Bearer" + " " + idtokenls;

  function supprUser(id) {
    AxSupprUser(idls, idtoken, id)
      .then((response) => {
        window.location.href = "/listUsers";
      })
      .catch((error) => {
        const errorData = error && error.response && error.response.data;
        setErrMessage(errorData.message);
        console.log(errorData);
      });
  }

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
      <ul className="grp-UserListItem-list">
        {users.map(
          ({ id, username, pseudo, isAdmin, createdAt, updatedAt }) => (
            <div className="grp-UserListItem-bloc" key={id}>
              <UserItem
                id={id}
                username={username}
                pseudo={pseudo}
                isAdmin={isAdmin}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
              <button
                className="grp-UserListItem-btn grp-UserListItem-btn-red"
                onClick={() => {
                  if (
                    window.confirm(
                      `Etes vous certain de vouloir supprimer cet utilisateur ${username} ? Valider par OK, sinon annuler.`
                    )
                  ) {
                    //
                    if (
                      window.confirm(
                        `Veuillez confirmer s'il vous plait ? Attention si Ok suppression de l'utilisateur ${username} .`
                      )
                    ) {
                      supprUser(id);
                    }
                    //
                  }
                }}
              >
                Supprimer
              </button>
              <button
                className="grp-UserListItem-btn grp-UserListItem-btn-green"
                type="button"
                onClick={abandon}
              >
                Abandon
              </button>
            </div>
          )
        )}
      </ul>
    </div>
  );
}
function abandon() {
  window.location.href = "/allMessages";
}
export default ListUsers;
