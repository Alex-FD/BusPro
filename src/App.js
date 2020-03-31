import React from "react";
import "./App.css";
import Main from "./components/main/main";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
