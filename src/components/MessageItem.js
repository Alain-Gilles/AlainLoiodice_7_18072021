import "../styles/MessageItem.css";

function MessageItem({
  id,
  title,
  content,
  objet,
  imgUrl,
  userId,
  createdAt,
  updatedAt,
  user,
}) {
  const dateCreat = createdAt.split("T");
  let aaaammjjC = dateCreat[0].toString().split("-");
  const heureCreat = dateCreat[1].split(".");
  const dateUpdate = updatedAt.split("T");
  let aaaammjjM = dateUpdate[0].toString().split("-");
  const heureUpdate = dateUpdate[1].split(".");
  const messuser = user.username;
  const messpseudo = user.pseudo;

  return (
    // <li key={id} className="grp-Mess-item">
    <li key={id}>
      <div>
        <p>
          message créé le : {aaaammjjC[2]}/{aaaammjjC[1]}/{aaaammjjC[0]} a{" "}
          {heureCreat[0]} par {messuser} {"  "} pseudo {messpseudo}
        </p>
        <p>
          modifié le : {aaaammjjM[2]}/{aaaammjjM[1]}/{aaaammjjM[0]} a{" "}
          {heureUpdate[0]}
        </p>
      </div>
      <h1>{title}</h1>
      <h2>{objet}</h2>
      <div>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default MessageItem;
