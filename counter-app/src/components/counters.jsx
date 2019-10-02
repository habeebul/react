import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          className="btn btn-seconday btn-sm btn-warning m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
        ;
      </div>
    );
  }
}

export default Counters;
