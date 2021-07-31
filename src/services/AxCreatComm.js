import React from "react";
import axios from "axios";

function AxCreatComm(idls, idtoken, formData) {
  var axios = require("axios");
  var data = JSON.stringify({
    userId: idls,
    content: formData.content,
    messageId: formData.idmess,
  });
  var config = {
    method: "post",
    url: "http://localhost:3001/api/comm",
    headers: {
      Authorization: idtoken,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}
export default AxCreatComm;
