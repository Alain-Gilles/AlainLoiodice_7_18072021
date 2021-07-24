// function LocSto(id, token) {
//   if ("IdUser" in localStorage) {
//     //
//     // Suppression de la clé dans le local storage
//     //
//     localStorage.removeItem("IdUser");
//   }
//   localStorage.setItem("IdUser", id);
//   if ("tokenUser" in localStorage) {
//     localStorage.removeItem("tokenUser");
//   }
//   localStorage.setItem("tokenUser", token);
// }
// export default LocSto;

function LocSto(trt, id, token) {
  let accMenu = false;

  if ("AccMe" in localStorage) {
    localStorage.removeItem("AccMe");
    localStorage.setItem("AccMe", accMenu);
  }
  if ("IdUser" in localStorage) {
    localStorage.removeItem("IdUser");
  }
  if ("tokenUser" in localStorage) {
    localStorage.removeItem("tokenUser");
  }
  if ("AllMessage" in localStorage) {
    localStorage.removeItem("AllMessage");
  }
  if (trt == "Login") {
    accMenu = true;
    localStorage.setItem("AccMe", accMenu);
    localStorage.setItem("IdUser", id);
    localStorage.setItem("tokenUser", token);
  }
}
export default LocSto;
