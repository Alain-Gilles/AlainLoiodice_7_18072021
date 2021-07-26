import React from "react";
import axios from "axios";

function AxAllOneMessComments(idmess, IdUser, idtoken) {
  var axios = require("axios");
  var data = {
    userId: IdUser,
  };
  let urlName = "http://localhost:3000/api/mess/comm/" + idmess;
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

export default AxAllOneMessComments;
//
