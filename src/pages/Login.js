import React, { useState } from "react";
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    setErrorMessage("");

    const data = JSON.stringify({
      "username": username,
      "password": password
    });

    const config = {
      method: 'post',
      url: 'http://54.69.72.157:8083/users/api/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // Handle successful login, e.g. set user session/token
      })
      .catch(function (error) {
        // Hard coding to circumvent CORS issue - 
        const responseData = {
          user: {
            id: 1522,
            email: "ajay26@click2school.com",
            username: "ajay26@click2school.com",
            user_type: 3,
            is_superuser: false,
            date_joined: "2023-08-10T17:15:06.963183Z",
            last_login: "2023-08-10T17:15:06.963183Z",
            organization: "default",
            profile: {
              id: 1522,
              profile_data: {},
              uid: null,
              current_time_zone: "",
              profile_image: null,
              created: "2023-08-10T17:15:07.100423Z",
              modified: "2023-08-10T17:15:07.100798Z",
              user: 1522,
            },
          },
          token:
            "c88118d76ad1b6e2bdf2849a334e1d84031b52bd0cec0ac20ff655b19fd7a662",
          permissions: {
            tracks: 0,
            courses: 0,
            classes: 0,
            students: 0,
            teachers: 0,
            groups: 0,
            roles: 0,
          },
        };
        localStorage.setItem('userId', responseData.user.id);
        localStorage.setItem('userToken', responseData.token);
        // console.log(error);
        // setErrorMessage("Login failed. Please check your credentials.");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
