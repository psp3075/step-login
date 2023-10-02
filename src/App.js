import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = () => {
    if (email.trim()) {
      setTimeout(() => {
        setStep(1);
      }, 1000);
    } else {
      alert("please enter email ");
    }
  };

  const validatePassword = () => {
    if (password.trim()) {
      alert("auth successful");
    } else {
      alert("please enter password ");
    }
  };

  const updateEmail = () => {
    setStep(0);
  };

  const EmailAuthComp = () => {
    return (
      <section>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={validateEmail}>Next</button>
      </section>
    );
  };
  const PasswordAuthComp = () => {
    return (
      <section>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={updateEmail}>Back</button>
        <button onClick={validatePassword}>Login</button>
      </section>
    );
  };
  return (
    <div className="App">
      {step === 0 ? <EmailAuthComp /> : <PasswordAuthComp />}
    </div>
  );
}

export default App;
