//import "../styles/LoginForm.css";
import React from "react";
import AxCreatMess from "../services/AxCreatMess";

function CreatMess(props) {
  const titleEl = React.useRef(null);
  const contentEl = React.useRef(null);
  const objetEl = React.useRef(null);
  const [errMessage, setErrMessage] = React.useState("");

  let ctrlOk = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: titleEl.current.value,
      content: contentEl.current.value,
      objet: objetEl.current.value,
    };
    setErrMessage("");

    if (formData.title === "") {
      setErrMessage("Vous devez saisir un titre");
      ctrlOk = false;
      return;
    }
    if (formData.content === "") {
      setErrMessage("Vous devez saisir un contenu");
      ctrlOk = false;
      return;
    }
    if (formData.objet === "") {
      setErrMessage("L'objet du message ets obligatoire");
      ctrlOk = false;
      return;
    }
    if (ctrlOk) {
      AxCreatMess(formData);
      // .then(function (response) {
      //   console.log(response);
      //   console.log(JSON.stringify(response.data));

      //   console.log("response.data ", response.data);
      //   console.log("response.data.userId ", response.data.userId);
      //   LocSto(trt, response.data.userId, response.data.token);
      //   window.location.href = "/allMessages";
      // })
      // .catch(function (error) {
      //   const errorData = error && error.response && error.response.data;

      //   console.log(errorData);
      //   setErrMessage(errorData.message);
      // });
    }
  };
  return (
    <div>
      <div className="creatMess">
        <h2 className="creatMessTitre">Création d'un message</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" ref={titleEl} />
        <input type="text" placeholder="content" ref={contentEl} />
        <input type="text" placeholder="objet" ref={objetEl} />
        <button type="submit" className="myButton">
          Creation
        </button>
        <div>
          <p>{errMessage}</p>
        </div>
      </form>
    </div>
  );
}

export default CreatMess;
