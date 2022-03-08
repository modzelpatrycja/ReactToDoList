function TaskInput(props) {
  return (
    <input
      type="text"
      placeholder="Type your todo here!"
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
}
export default TaskInput;
