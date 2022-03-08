import "./styles.css";
import React from "react";
import Task from "./Task";
import TaskInput from "./TaskInput";

class App extends React.Component {
  state = {
    elementsToDo: [],
    elementsDone: [],
    task: ""
  };

  inputHandler(event) {
    const value = event.target.value;
    this.setState({ task: value });
  }

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.addToToDo();
    }
  };

  handleCheckboxClicked(id) {
    const index = this.state.elementsToDo.findIndex((x) => x.id === id);
    const toDo = this.state.elementsToDo;
    const name = toDo[index].name;
    toDo.splice(index, 1);
    this.setState({ elementsToDo: toDo });
    this.setState({ task: name }, () => this.addToDone());
  }

  addToToDo() {
    const item = {
      id: Math.random(),
      name: this.state.task
    };
    const toDo = [item, ...this.state.elementsToDo];
    this.setState({ elementsToDo: toDo });
    this.setState({ task: "" });
  }

  addToDone() {
    const item = {
      id: Math.random(),
      isDone: true,
      name: this.state.task
    };
    const Done = [item, ...this.state.elementsDone];
    this.setState({ elementsDone: Done });
    this.setState({ task: "" });
  }

  render() {
    const elementsToDo = this.state.elementsToDo.map((e) => {
      return (
        <Task
          element={e}
          handleCheckboxClicked={this.handleCheckboxClicked.bind(this)}
          key={e.id}
        />
      );
    });
    const elementsDone = this.state.elementsDone.map((e) => {
      return <Task element={e} key={e.id} />;
    });

    return (
      <div className="App">
        <h1>React state todoMVC:</h1>
        <TaskInput
          value={this.state.task}
          onChange={this.inputHandler.bind(this)}
          onKeyDown={this.handleKeyDown}
        />
        <h3>To do</h3>
        <div>{elementsToDo}</div>
        <h3> Done</h3>
        <div>{elementsDone}</div>
      </div>
    );
  }
}
export default App;
