import React from "react";
import axios from "axios";

function AxCreatMess(idls, idtoken, formData) {
  var axios = require("axios");
  var data = JSON.stringify({
    userId: idls,
    title: formData.title,
    content: formData.content,
    objet: formData.objet,
  });
  console.log("axiosAxCreatMess Data", data);
  var config = {
    method: "post",
    url: "http://localhost:3001/api/mess",
    headers: {
      Authorization: idtoken,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}
export default AxCreatMess;
