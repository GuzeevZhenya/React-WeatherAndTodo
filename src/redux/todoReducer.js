export const CHANGE_NAME = "CHANGE_NAME";
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
const initialState = {
  todos: [
    {
      id: 0,
      todos: "Купить молока",
    },
    {
      id: 1,
      todos: "Cделать дз",
    },
  ],
  value: "",
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      console.log(action.value);
      return {
        ...state,
        value: action.value,
      };
    case ADD_TASK:
      const newTask = { id: state.todos.length + 1, todos: action.value };

      return {
        ...state,
        todos: [...state.todos, newTask],
      };
    case REMOVE_TASK:
      const newState = state.todos.filter((item) => item.id !== action.value);
      return {
        ...state,
        todos: newState,
      };
    default:
      return state;
  }
};

export default todoReducer;
