import React, { Component } from "react";
import TodoItem from "./Todoitem";
import PropTypes from "prop-types";
// 역시나 한 칸 위인 app으로 markcomplete을 올려줌, 올려줄 때는 props라고 중간에 써줘야 됨
class Todos extends Component {
  render() {
    return this.props.todos.map((eachtodo) => (
      <TodoItem
        key={eachtodo.id}
        todo={eachtodo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// 밑에 Todos는 여기 클래스 네임
// todos는 todo 여러 개를 가지고 있는 array임
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default Todos;
