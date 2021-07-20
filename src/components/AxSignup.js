import React from "react";
import axios from "axios";

function AxSignup(formData) {
  console.log("axiosSignup formData", formData);
  var axios = require("axios");
  var creatUser = false;
  // var data = JSON.stringify({
  //   formData,
  // });
  var data = JSON.stringify({
    username: formData.username,
    pseudo: formData.pseudo,
    password: formData.password,
    email: formData.email,
  });
  console.log("axiosSignup Data", data);
  var config = {
    method: "post",
    url: "http://localhost:3000/api/auth/signup",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE2MjYyOTIxODYsImV4cCI6MTYyNjM3ODU4Nn0.TQ7Mj8_KiOYjZKKsXAShXXans7kSIXhQfAgKaeuRSgI",
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(response);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default AxSignup;
