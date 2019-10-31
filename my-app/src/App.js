import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Alert from "./components/alert";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Alert/>
      <Jumbotron/>
      <Card />
    </div>
  );
}

export default App;
