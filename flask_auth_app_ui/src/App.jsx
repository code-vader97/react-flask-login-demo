import { useState, useRef } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const messageRef = useRef();

  function handleLogout() {
    window.location.href = "/logout"; // Full redirect — browser handles it
  }

  async function handlePostRequest() {
    try {
      const response = await axios.post("/echo", {
        message: messageRef.current.value,
      });

      console.log("Server response:", response.data);
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br></br>
        <button onClick={handleLogout}>Logout</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <input ref={messageRef} type="text" />
        <button onClick={handlePostRequest}>Send post request.</button>
      </div>
    </>
  );
}

export default App;
