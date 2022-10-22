import "./App.css";
import { useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import LoginService from "./services/loginService";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [logged, setLogged] = useState(false);
  const [email, setEmail] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#387373",
      },
      secondary: {
        main: "#2D3E40",
      },
    },
  });

  function login(values) {
    new LoginService().login(values).then((res) => {
      console.log(res);
      setEmail(values.email);
      setLogged(true);
    });
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {logged ? <Home email={email} /> : <Login onLogin={login} />}
      </ThemeProvider>
    </div>
  );
}

export default App;
