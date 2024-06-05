import React, { useState } from "react";
import InfoContext from "../../store/InforProvider";
import { useContext } from "react";
function Form() {
  const [name, setnameUser] = useState("");
  const [password, setPassword] = useState("");
  const { setname } = useContext(InfoContext);
  const submit = (e) => {
    e.preventDefault();
    setname({ name: name, password: password });
    setnameUser("");
    setPassword("");
  };
  return (
    <form action="" onSubmit={submit} className="col-6 offset-4">
      <div className="">
        <label></label>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setnameUser(e.target.value)}
          className="form-control"
          placeholder=""
          aria-describedby="helpId"
        />
      </div>
      <div className="">
        <label></label>
        <input
          type="text"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder=""
          aria-describedby="helpId"
        />
      </div>
      <button type="submit" className="">
        Submit
      </button>
    </form>
  );
}

export default Form;
