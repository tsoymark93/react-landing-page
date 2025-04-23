import React from "react";
import Program from "./components/Program/Program";
import GoogleTranslate from "./components/GoogleTranslate";
import "./App.css";
import "./styles/GoogleTranslate.css";

function App() {
  return (
    <div className="App">
      <GoogleTranslate />
      <Program />
    </div>
  );
}

export default App;
