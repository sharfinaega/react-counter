import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
  }

  increment = () => {
    this.setState({
      amount: this.state.amount + 1
    });
  };

  decrement = () => {
    this.setState({
      amount: this.state.amount - 1
    });
  };

  kembaliNol = () => {
    this.setState({
      amount: 0
    });
  };

  render() {
    return (
      <div className="App">
        <div id="judul">
          <h1>COUNTER MACHINE</h1>
        </div>
        {this.state.amount < 0 ? "angka tidak valid" : this.state.amount}
        <div className="container">
          <div id="tambah" onClick={this.increment}>
            +
          </div>
          <div id="reset" onClick={this.kembaliNol}>
            <b>Mulai dari 0</b>
          </div>
          <div id="kurang" onClick={this.decrement}>
            -
          </div>
        </div>
      </div>
    );
  }
}

export default App;
