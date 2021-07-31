function UserItem({ id, username, pseudo, isAdmin, createdAt, updatedAt }) {
  const dateCreat = createdAt.split("T");
  const heureCreat = dateCreat[1].split(".");
  const dateUpdate = updatedAt.split("T");
  const heureUpdate = dateUpdate[1].split(".");

  return (
    <li key={id}>
      <div>
        <h2>{id}</h2>
        <h3>{username}</h3>
        <h3>{pseudo}</h3>
        <h3>isAdmin : {isAdmin}</h3>
      </div>
    </li>
  );
}

export default UserItem;
