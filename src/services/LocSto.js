function LocSto(trt, id, token, isAdmin, pseudo) {
  let accMenu = false;

  const Connect = {
    id: 0,
    ad: false,
    ps: "",
  };

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

  if ("Connect" in localStorage) {
    localStorage.removeItem("Connect");
  }

  if (trt == "Login") {
    accMenu = true;
    Connect.id = id;
    Connect.ad = isAdmin;
    Connect.ps = pseudo;

    console.log("LocSto  ");

    localStorage.setItem("AccMe", accMenu);
    localStorage.setItem("IdUser", id);
    localStorage.setItem("tokenUser", token);
    let ConnectStringify = JSON.stringify(Connect);
    localStorage.setItem("Connect", ConnectStringify);
  }
}
export default LocSto;
