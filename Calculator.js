import React, { Component } from "react";
import App from "./App";
import "./App.css";
import "./Calculator.css";
import Button from "./Button.js";
import download from "./download.jpg";

class KeyPadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "",
      picture: null,
    };
  }

  ClickHandle = (e) => {
    const { text1 } = this.state;

    if (e.target.value === "C") {
      this.setState({ text1: "" });
    } else if (e.target.value === "=") {
      try {
        const result = eval(text1); // Be cautious with eval in real-world apps!
        this.setState({ text1: result });
        alert(result);
      } catch (error) {
        alert("Invalid Expression");
      }
    } else if (e.target.value === "Show me") {
      this.setState({ picture: download });
    } else if (e.target.value === "Square") {
      this.setState({ text1: text1 * text1 });
    } else {
      this.setState({ text1: text1 + e.target.value });
    }
  };

  render() {
    const { text1, picture } = this.state;

    return (
      <div className="Calculator">
        <div className="screen-row">
          <input type="text" readOnly value={text1} />
        </div>

        <div>
          <Button label="(" ClickHandle={this.ClickHandle} />
          <Button label="CE" ClickHandle={this.ClickHandle} />
          <Button label=")" ClickHandle={this.ClickHandle} />
          <Button label="C" ClickHandle={this.ClickHandle} />
        </div>

        <div>
          <Button label="1" ClickHandle={this.ClickHandle} />
          <Button label="2" ClickHandle={this.ClickHandle} />
          <Button label="3" ClickHandle={this.ClickHandle} />
          <Button label="+" ClickHandle={this.ClickHandle} />
        </div>

        <div>
          <Button label="4" ClickHandle={this.ClickHandle} />
          <Button label="5" ClickHandle={this.ClickHandle} />
          <Button label="6" ClickHandle={this.ClickHandle} />
          <Button label="-" ClickHandle={this.ClickHandle} />
        </div>

        <div>
          <Button label="7" ClickHandle={this.ClickHandle} />
          <Button label="8" ClickHandle={this.ClickHandle} />
          <Button label="9" ClickHandle={this.ClickHandle} />
          <Button label="*" ClickHandle={this.ClickHandle} />
        </div>

        <div>
          <Button label="." ClickHandle={this.ClickHandle} />
          <Button label="0" ClickHandle={this.ClickHandle} />
          <Button label="=" ClickHandle={this.ClickHandle} />
          <Button label="/" ClickHandle={this.ClickHandle} />
        </div>

        <div>
          <Button label="Show me" ClickHandle={this.ClickHandle} />
          <img src={picture} alt="" />
        </div>

        <div>
          <Button label="Square" ClickHandle={this.ClickHandle} />
        </div>
      </div>
    );
  }
}

export default KeyPadComponent;
