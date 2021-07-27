import React from "react";
import axios from "axios";

function AxAllMessages(id, idtoken) {
  var axios = require("axios");
  var data = {
    userId: id,
  };
  var config = {
    method: "post",
    url: "http://localhost:3001/api/mess/get",
    headers: {
      Authorization: idtoken,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

export default AxAllMessages;
//
