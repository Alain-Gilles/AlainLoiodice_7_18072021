import React from "react";
function DeconnectForm(props) {
  if ("UnMessage" in localStorage) {
    localStorage.removeItem("UnMessage");
  }
  if ("ModifUnMessage" in localStorage) {
    localStorage.removeItem("ModifUnMessage");
  }
  if ("tokenUser" in localStorage) {
    localStorage.removeItem("tokenUser");
  }
  if ("ModifUnComment" in localStorage) {
    localStorage.removeItem("ModifUnComment");
  }
  if ("Connect" in localStorage) {
    localStorage.removeItem("Connect");
  }
  if ("AccMe" in localStorage) {
    localStorage.removeItem("AccMe");
  }
  if ("tokenUser" in localStorage) {
    localStorage.removeItem("tokenUser");
  }
  if ("IdUser" in localStorage) {
    localStorage.removeItem("IdUser");
  }

  window.location.href = "/login";
}

export default DeconnectForm;
