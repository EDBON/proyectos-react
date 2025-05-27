import React, { useState } from 'react';
import './App.css';
import Login from "./login/Login"
import ChangePassword from "./password/ChangePassword"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("1234"); // contraseña por defecto

  return (
    <div>
      {loggedIn ? (
        <ChangePassword 
          currentPassword={password}
          onPasswordChange={setPassword}
          onLogout={() => setLoggedIn(false)} 
        />
      ) : (
        <Login 
          storedPassword={password}
          onLogin={() => setLoggedIn(true)} 
        />
      )}
    </div>
  );
}

export default App
