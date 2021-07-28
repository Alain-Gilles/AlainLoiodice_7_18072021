import "../styles/MessageItem.css";
import "../styles/CommentItem.css";

function CommentItem({ id, content, userId, createdAt, updatedAt, user }) {
  const dateCreat = createdAt.split("T");
  const heureCreat = dateCreat[1].split(".");
  const dateUpdate = updatedAt.split("T");
  const heureUpdate = dateUpdate[1].split(".");
  const messuser = user.username;
  const messpseudo = user.pseudo;
  return (
    // <li key={id} className="grp-Mess-item">
    <li key={id}>
      <div>
        <p>
          commentaire créé le : {dateCreat[0]} a {heureCreat[0]} par {messuser}{" "}
          {"  "} pseudo {messpseudo}
        </p>
        <p>
          modifié le : {dateUpdate[0]} a {heureUpdate[0]}
        </p>
      </div>
      <div>
        <h2>{content}</h2>
      </div>
    </li>
  );
}

export default CommentItem;
