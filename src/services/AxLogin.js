import React from "react";
import axios from "axios";

function AxLogin(formData) {
  console.log("axiosSignup formData", formData);
  var axios = require("axios");
  // var data = JSON.stringify({
  //   formData,
  // });
  var data = JSON.stringify({
    pseudo: formData.pseudo,
    password: formData.password,
    email: formData.email,
  });
  console.log("axiosLogin Data", data);
  var config = {
    method: "post",
    url: "http://localhost:3001/api/auth/login",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE2MjYyOTIxODYsImV4cCI6MTYyNjM3ODU4Nn0.TQ7Mj8_KiOYjZKKsXAShXXans7kSIXhQfAgKaeuRSgI",
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

export default AxLogin;
