import React, { Component } from "react";
import PropTypes from "prop-types";

// inline styling 사용시 괄호 두 개 씀
// variable 사용시 괄호 한 개 씀
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      //   <div style={{ backgroundColor: "#f4f4f4" }}>
      //   <div style={itemStyle}>
      //   space 줄려면 {' '} 추가하면 됨
      //   https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method
      //   bind 안 쓰고 this 쓰면 this가 변형되어 함수 속을 가리키지 않고 window를 의미한다고 함.
      //   bind는 this가 변형되지 않게 묶어줌. 다만 =>를 쓰면 this를 바꾸지 않으므로 그러지 않아도 됨
      // 바로 위인 todos로 보내는 것. todos의 prop에 markcomplete을 써놔야 찾아감
      //   왜 bind 써 주냐고? 어떤 애가 complete로 바뀌는 지 보고 싶은데, 그러려면 id를 app.js까지 passin 해야됨.
      //   이를 위해 씀. 보내는 김에 id까지 묶어서 보내는 것. this는 무조건 첫 parameter
      //물론 다 써주기 귀찮으니까 destructuring 써줌, 그렇다면 여기서 안 하고 왜 위로 보내냐? state까지 결합해서 수정하려고
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}
// 밑에 TodoItem은 여기 클래스 네임
// todo들은 각각 object임
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

// const itemStyle = {
//   backgrounColor: "f4f4f4",
// };
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
export default TodoItem;
