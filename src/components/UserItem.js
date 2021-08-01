import "../styles/UserListItem.css";

function UserItem({ id, username, pseudo, isAdmin, createdAt, updatedAt }) {
  let dateCreat = createdAt.split("T");
  let aaaammjj = dateCreat[0].toString().split("-");
  const heureCreat = dateCreat[1].split(".");
  const dateUpdate = updatedAt.split("T");
  const heureUpdate = dateUpdate[1].split(".");
  console.log(" useritems isAdmin ", isAdmin);
  let Adm = "Non";
  if (isAdmin) {
    Adm = "Oui";
  }

  return (
    <li className="grp-UserListItem-li" key={id}>
      <div>
        <p className="grp-UserListItem-Username">
          username&nbsp;&nbsp;: {username}
        </p>
        <p>user Id&nbsp;&nbsp;&nbsp;: {id}</p>
        <p className="grp-UserListItem-Pseudo">
          pseudo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {pseudo}
        </p>
        <p>Admin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {Adm}</p>
        <p>
          créé le : {aaaammjj[2]}/{aaaammjj[1]}/{aaaammjj[0]}
        </p>
      </div>
    </li>
  );
}

export default UserItem;
