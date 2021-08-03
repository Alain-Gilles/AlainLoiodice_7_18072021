function VerifConnect(props) {
  if (!("tokenUser" in localStorage)) {
    window.location.href = "/login";
  }
}

export default VerifConnect;
