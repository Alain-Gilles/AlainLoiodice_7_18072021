import "../styles/MessageItem.css";

function MessageItem({ id, title, content, objet, imgUrl, userId }) {
  return (
    <li key={id} className="grp-Mess-item">
      <h1>{title}</h1>
      <h2>{objet}</h2>
      <div>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default MessageItem;
