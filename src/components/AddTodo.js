import React, { Component } from "react";
import PropTypes from "prop-types";
export class AddTodo extends Component {
  // 보통 state로 input 입력값 나타냄
  //   value 쓰면 onchange도 써져야 됌, 여기서 setstate는 바로 밑에 애 말함.
  //   바로 위인 app js로 올리기(onsubmit을)
  state = {
    inputTitle: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.inputTitle);
    this.setState({ inputTitle: "" });
  };
  dynamicInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="inputTitle"
          style={{ flex: "10", padding: "5px" }}
          placeholder="Add Todo..."
          value={this.state.inputTitle}
          onChange={this.dynamicInput}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        ></input>
      </form>
    );
  }
}
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default AddTodo;
