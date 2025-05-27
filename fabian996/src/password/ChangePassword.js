import React, { useState } from "react";
import "./ChangePassword.css";

function ChangePassword({ currentPassword, onPasswordChange, onLogout }) {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (current === currentPassword) {
      onPasswordChange(newPass);
      setMessage("Contraseña cambiada con éxito");
      setCurrent("");
      setNewPass("");
    } else {
      setMessage("Contraseña actual incorrecta");
    }
  };

  return (
    <div className="password-container">
      <h2>Cambiar contraseña</h2>
      <form onSubmit={handleChange}>
        <input
          type="password"
          placeholder="Contraseña actual"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nueva contraseña"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
        />
        <button type="submit">Cambiar</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}


export default ChangePassword;
