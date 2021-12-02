import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_NAME, ADD_TASK, REMOVE_TASK } from "../../redux/todoReducer";

export const Todo = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.todoReducer);

  const todos = state.todos.map((item) => (
    <div key={item.id}>
      {item.id}: {item.todos}
      <button onClick={() => removeTodoTask(item.id)}>Remove</button>
    </div>
  ));

  //   todos = todos.map((item,index)=>{
  //     return item.id = index;
  //   })

  const changeInput = (value) => {
    dispatch({ type: CHANGE_NAME, value });
  };

  const addTask = () => {
    dispatch({ type: ADD_TASK, value: state.value });
  };
  const removeTodoTask = (id) => {
    dispatch({ type: REMOVE_TASK, value: id });
  };

  return (
    <div>
      <input
        onChange={(e) => changeInput(e.target.value)}
        value={state.value}
      />
      <button onClick={() => addTask()}>Add Task</button>
      <div>{todos}</div>
    </div>
  );
};
