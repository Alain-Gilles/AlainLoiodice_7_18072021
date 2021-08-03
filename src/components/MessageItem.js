import { formatDate } from "../services/TransformDate";
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
  createdAt = formatDate(createdAt);
  updatedAt = formatDate(updatedAt);

  const messuser = user.username;
  const messpseudo = user.pseudo;

  return (
    // <li key={id} className="grp-Mess-item">
    <li key={id}>
      <div>
        <p>
          message créé le : {createdAt} par {messuser} {"  "} pseudo{" "}
          {messpseudo}
        </p>
        <p>modifié le : {updatedAt}</p>
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
