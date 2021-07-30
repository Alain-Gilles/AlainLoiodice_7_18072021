import React from "react";
import axios from "axios";

function AxSupprMess(idls, idtoken, idMess) {
  var axios = require("axios");
  var data = JSON.stringify({
    userId: idls,
  });
  let configUrl = "http://localhost:3001/api/mess/" + idMess;
  var config = {
    method: "delete",
    url: configUrl,
    headers: {
      Authorization: idtoken,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}
export default AxSupprMess;
