import React from "react";
import axios from "axios";

function AxModifMess(idls, idtoken, formData, idMess) {
  var axios = require("axios");
  var data = JSON.stringify({
    userId: idls,
    title: formData.title,
    content: formData.content,
    objet: formData.objet,
    imgUrl: formData.imgUrl,
  });
  let configUrl = "http://localhost:3001/api/mess/" + idMess;
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
export default AxModifMess;
