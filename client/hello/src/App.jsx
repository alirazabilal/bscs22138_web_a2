import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/hello/amjad")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <h1>ok</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
