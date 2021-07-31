import React from "react";
import axios from "axios";

function AxAllUsers(id, idtoken) {
  var axios = require("axios");

  let configUrl = "http://localhost:3001/api/auth" + "?" + "userId" + "=" + id;
  var config = {
    method: "get",
    url: configUrl,
    headers: {
      Authorization: idtoken,
      "Content-Type": "application/json",
    },
  };

  return axios(config);
}

export default AxAllUsers;
