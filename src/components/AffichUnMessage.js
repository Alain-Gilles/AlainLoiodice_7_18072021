import React from "react";
function AffichUnMessage(props) {
  let id = props.match.params.id;
  let userId = props.match.params.userId;
  alert("id  " + id + "  userId  " + userId);
  return (
    <div>
      <p>Affiche un message</p>
      <p>id du message = {id}</p>
      <p>userId = {userId}</p>
    </div>
  );
}
export default AffichUnMessage;
