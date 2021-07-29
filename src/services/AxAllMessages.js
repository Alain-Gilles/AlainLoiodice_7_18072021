import React from "react";
import axios from "axios";

function AxAllMessages(id, idtoken) {
  var axios = require("axios");

  let configUrl = "http://localhost:3001/api/mess" + "?" + "userId" + "=" + id;
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

export default AxAllMessages;
//
