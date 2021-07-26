import "../styles/MessageItem.css";

function CommentItem({ id, content, userId }) {
  return (
    // <li key={id} className="grp-Mess-item">
    <li key={id}>
      <h1>{id}</h1>
      <h2>{userId}</h2>
      <div>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default CommentItem;
