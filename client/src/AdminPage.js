import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AdminPage() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
      .then((response) => {
        if (response.ok) {
          navigate('/score'); // Rediriger vers la page d'administration
          console.log("Aut reussi")
        } else {
          setErrorMessage("Mot de passe incorrect");
        }
      })
      .catch((err) => {
        setErrorMessage("Une erreur s'est produite");
      });
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label>
          <p className='mot'>Mot de passe </p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password-input" />
        </label>
        <button type="submit" className="login-button">Se connecter</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default AdminPage;
