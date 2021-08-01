import React from "react";
import axios from "axios";

function AxSupprUser(idls, idtoken, iduser) {
  var axios = require("axios");
  var data = JSON.stringify({
    userId: idls,
  });
  let configUrl = "http://localhost:3001/api/auth/" + iduser;
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
export default AxSupprUser;
