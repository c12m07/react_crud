import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function Login(params) {
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validId = /^[0-9]+$/;

  const [valueEmail, setValueEmail] = useState({ campo: "" });
  const [valueId, setValueId] = useState({ campo: "" });
  const [errorEmail, setErrorEmail] = useState("");
  const [errorId, setErrorId] = useState("");

  const onChangeEmail = (e) => {
    setValueEmail({ ...valueEmail, campo: e.target.value });
    if (validEmail.test(valueEmail.campo)) {
      setErrorEmail("");
    } else {
      setErrorEmail("* Ingrese un email válido *");
    }
  };
  const onChangeId = (e) => {
    setValueId({ ...valueId, campo: e.target.value });
    if (validId.test(valueId.campo)) {
      setErrorId("");
    } else {
      setErrorId("* Solo se admiten números *");
    }
  };

  function onSubmit(e) {
    e.preventDefault();
    const email2 = e.target.email.value;
    const discordid2 = e.target.discordId.value;
    params.onLogin({ email: email2, discordId: discordid2 });
  }

  return (
    <div className="LoginContainer">
      <h1>Inicia Sesion</h1>
      <form onSubmit={onSubmit}>
        <TextField
          onChange={onChangeEmail}
          onKeyUp={onChangeEmail}
          onBlur={onChangeEmail}
          id="filled-basic1"
          label="Email"
          variant="filled"
          type="email"
          name="email"
          margin="normal"
          helperText={errorEmail}
          required
        />
        <TextField
          onChange={onChangeId}
          onKeyUp={onChangeId}
          onBlur={onChangeId}
          id="filled-basic2"
          label="Discord ID"
          variant="filled"
          type="text"
          name="discordId"
          margin="normal"
          helperText={errorId}
          // autoComplete="off"
          required
        />
        <Button variant="outlined" type="submit">
          LOGIN
        </Button>
      </form>
    </div>
  );
}

export default Login;
