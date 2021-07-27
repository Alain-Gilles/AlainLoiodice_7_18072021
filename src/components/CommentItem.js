import "../styles/MessageItem.css";
import "../styles/CommentItem.css";

function CommentItem({ id, content, userId }) {
  return (
    // <li key={id} className="grp-Mess-item">
    <li key={id}>
      <p>Créateur du commentaire : {userId}</p>
      <p>Numéro commentaire : {id}</p>
      <div>
        <h2>{content}</h2>
      </div>
    </li>
  );
}

export default CommentItem;
