import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        Navbar
        <span className="btn btn-seconday btn-sm btn-warning m-2">
          {this.props.totalCount}
        </span>
        <button
          className="btn btn-seconday btn-sm btn-warning m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
      </nav>
    );
  }
}

export default Nav;
