import React from "react";
import axios from "axios";

function AxUnMessage(idls, idtoken, id) {
  var axios = require("axios");
  var data = {
    userId: idls,
  };
  let urlName = "http://localhost:3001/api/mess/getOne/" + id + "?" + idls;
  var config = {
    method: "post",
    url: urlName,
    headers: {
      Authorization: idtoken,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

export default AxUnMessage;
//
