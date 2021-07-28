import React from "react";
import axios from "axios";

function AxUnMessage(idls, idtoken, id) {
  var axios = require("axios");
  let configUrl =
    "http://localhost:3001/api/mess/" + id + "?" + "userId" + "=" + idls;
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

export default AxUnMessage;
//
