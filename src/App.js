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
    this.state.amount <= 0 ? alert("Invalid number") : this.setState({ amount: this.state.amount - 1 });
    // this.setState({

    //   amount: this.state.amount - 1
    // });
    // if (this.state.amount < 0) {
    //   alert("angka tidak valid");
    // }
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
        {/* {this.state.amount < 0 ? alert("Angka tidak valid") : this.state.amount} */}
        <div>{this.state.amount}</div>
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
