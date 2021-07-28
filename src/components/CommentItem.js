import "../styles/MessageItem.css";
import "../styles/CommentItem.css";

function CommentItem({ id, content, userId, createdAt, updatedAt }) {
  const dateCreat = createdAt.split("T");
  const heureCreat = dateCreat[1].split(".");
  const dateUpdate = updatedAt.split("T");
  const heureUpdate = dateUpdate[1].split(".");
  return (
    // <li key={id} className="grp-Mess-item">
    <li key={id}>
      <div>
        <p>
          commentaire créé le : {dateCreat[0]} a {heureCreat[0]} par {"  "}
          {userId}
        </p>
        <p>
          modifié le : {dateUpdate[0]} a {heureUpdate[0]}
        </p>
      </div>
      <p>Créateur du commentaire : {userId}</p>
      <p>Numéro commentaire : {id}</p>
      <div>
        <h2>{content}</h2>
      </div>
    </li>
  );
}

export default CommentItem;
