import React from "react";
import axios from "axios";

function AxModifComm(idls, idtoken, formData) {
  var axios = require("axios");
  var data = JSON.stringify({
    userId: idls,
    content: formData.content,
  });
  let configUrl = "http://localhost:3001/api/Comm/" + formData.idcomm;
  var config = {
    method: "put",
    url: configUrl,
    headers: {
      Authorization: idtoken,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}
export default AxModifComm;
