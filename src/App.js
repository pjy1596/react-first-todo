import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import { v4 as uuid } from "uuid";
import axios from "axios";
import "./App.css";
// 밑에처럼 function으로 써도 되고 es6로 extend 써도 됨
// https://reactjs.org/docs/components-and-props.html
// https://stackoverflow.com/questions/60830848/attempted-import-error-uuid-does-not-contain-a-default-export-imported-as-u
//  axios는 뭐냐? Axios is a very popular JavaScript library you can use to perform HTTP requests, that works in both Browser and Node. js platforms.
// It supports all modern browsers, including support for IE8 and higher. It is promise-based, and this lets us write async/await code to perform XHR requests very easily.
// get으로 api에서 가져왔고, post로(물론 여기 api에서는 가상으로 post받고 답해줌) 우리가 입력할 수 있게
class App extends Component {
  state = {
    todos: [],
  };
  // 밑에 애는 저 경우에 쓰임 external applications, such as web APIs or JavaScript frameworks.
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  // 밑에서부터 가져온 id와 지금 여기 id가 같으면 completed가 toggle로 바뀌게 만들기!
  // https://reactjs.org/docs/react-component.html#setstate
  // state를 간단히 말해 모든 데이터 위에 떠 있는 구름 같은 것으로 보기. 밑에서부터 순서대로 변화를 주면
  // 그 구름이 변화를 비처럼 뿌려주는 것
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };
  addTodo = (whatyoutype) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: whatyoutype,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    return (
      // 밑에 껀 jsx라고 불림, {}안에 있는 게 javascript 내용
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  {/* todos의 property 추가 */}
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
