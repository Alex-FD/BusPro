import React, { Component } from "react";
import Sidebar from "../sidebar/sidebar";
import Card from "../card/card";

class Main extends Component {
  render() {
    return (
      <main className="main page">
        <section className="section">
          <div className="main__inner  group main__inner_info">
            <Sidebar />
            <div className="section__element section__element_full">
              <Card />
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
