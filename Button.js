import React, { Component } from "react";
import "./App.css";
import "./Calculator.css";

class Button extends Component {
  render() {
    const { label, ClickHandle } = this.props; // Destructure props for convenience

    return (
      <button
        className="ButtonStyle"
        value={label}
        onClick={ClickHandle}
      >
        {label}
      </button>
    );
  }
}

// Export the Button class component
export default Button;
