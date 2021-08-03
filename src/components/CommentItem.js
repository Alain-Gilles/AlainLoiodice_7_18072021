import "../styles/MessageItem.css";
import "../styles/CommentItem.css";
import { formatDate } from "../services/TransformDate";

function CommentItem({ id, content, userId, createdAt, updatedAt, user }) {
  createdAt = formatDate(createdAt);
  updatedAt = formatDate(updatedAt);

  const messuser = user.username;
  const messpseudo = user.pseudo;
  return (
    // <li key={id} className="grp-Mess-item">
    <li key={id}>
      <div>
        <p>
          commentaire créé le : {createdAt} par {messuser} {"  "} pseudo{" "}
          {messpseudo}
        </p>
        <p>modifié le : {updatedAt}</p>
      </div>
      <div>
        <h2>{content}</h2>
      </div>
    </li>
  );
}

export default CommentItem;
