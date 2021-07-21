function LocSto(id, token) {
  if ("IdUser" in localStorage) {
    //
    // Suppression de la clé dans le local storage
    //
    localStorage.removeItem("IdUser");
  }
  localStorage.setItem("IdUser", id);
  if ("tokenUser" in localStorage) {
    localStorage.removeItem("tokenUser");
  }
  localStorage.setItem("tokenUser", token);
}
export default LocSto;
