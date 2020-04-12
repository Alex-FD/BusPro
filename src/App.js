import React from "react";
import "./App.css";
import Main from "./components/main/main";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
