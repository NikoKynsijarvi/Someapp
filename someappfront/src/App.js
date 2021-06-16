import React, { useState, useEffect } from "react";
import MainSection from "./componets/MainSection";
import Navigation from "./componets/Navbar";
import LoginForm from "./componets/LoginForm";
import RegisterForm from "./componets/RegisterForm";
import loginService from "./services/login";
import postService from "./services/julkaisut";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserInfo from "./componets/User";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [className, setClassName] = useState("error");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedSomeappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      postService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService({
        username,
        password,
      });

      window.localStorage.setItem("loggedSomeappUser", JSON.stringify(user));
      postService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setClassName("error");
      setErrorMessage("Wrong username or password");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/">
            {user ? (
              <div>
                <Navigation setUser={setUser} />
                <MainSection
                  user={user}
                  className={className}
                  message={errorMessage}
                  setMessage={setErrorMessage}
                  setClassName={setClassName}
                />
              </div>
            ) : (
              <LoginForm
                handleLogin={handleLogin}
                password={password}
                username={username}
                setPassword={setPassword}
                setUsername={setUsername}
                message={errorMessage}
                className={className}
              />
            )}
          </Route>
          <Route path="/createuser">
            <RegisterForm
              message={errorMessage}
              setErrorMessage={setErrorMessage}
              className={className}
              setClassName={setClassName}
            />
          </Route>
          <Route path="/user">
            <UserInfo user={user} />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
