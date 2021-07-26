import React from "react";
import axios from "axios";

function AxAllUsers(id, idtoken) {
  var axios = require("axios");
  var data = {
    userId: id,
  };
  var config = {
    method: "post",
    url: "http://localhost:3000/api/auth",
    headers: {
      Authorization: idtoken,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

export default AxAllUsers;
