function ValidEmail(email) {
  var regEmail = new RegExp(
    "^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$",
    "i"
  );
  return regEmail.test(email);
}
export default ValidEmail;
