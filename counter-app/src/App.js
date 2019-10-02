import React, { Component } from "react";
import "./App.css";
import Nav from "./components/navigation";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  getCounters() {
    return this.state.counters;
  }
  getIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  getDeleted = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };
  setReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  };
  render() {
    return (
      <React.Fragment>
        <Nav
          onReset={this.setReset}
          totalCount={this.state.counters.map(c => {
            return c.value;
          })}
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.getIncrement}
          onDelete={this.getDeleted}
          onReset={this.setReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
