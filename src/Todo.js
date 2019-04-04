import React from "react";

class Todo extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    return <h1>Individual Todo</h1>;
  }
}

export default Todo;
