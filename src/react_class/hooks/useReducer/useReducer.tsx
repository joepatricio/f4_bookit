import { useReducer, useState } from "react";

// // Define the reducer function
// const counterReducer = (
//   state: { count: number },
//   action: { type: string; sample?: number }
// ) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: (state.count = 0) };
//     default:
//       return state;
//   }
// };

// export const Counter = () => {
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: "increment", sample: 200 })}>
//         Increment
//       </button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// };

interface TodoListInterface {
  id: number;
  task: string;
  isDone: boolean;
}

const todoReducer = (
  state: { toDoList: TodoListInterface[] },
  action: { type: string; todo?: TodoListInterface }
) => {
  switch (action.type) {
    case "ADD":
      return { toDoList: [...state.toDoList, action.todo!] };
    case "DONE":
      let updateTodo: TodoListInterface[] = [];
      state.toDoList.map((data) => {
        if (data.id.toString() == action.todo?.id.toString()) {
          updateTodo.push({ ...data, isDone: true });
        } else {
          updateTodo.push(data);
        }
      });
      return { toDoList: updateTodo };
    case "RESET":
      return { toDoList: [] };
    default:
      return state;
  }
};

export const TodoReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, { toDoList: [] });

  const [task, setTask] = useState<string>("");
  return (
    <div style={{ display: "grid" }}>
      <div style={{ display: "flex" }}>
        <input type="text" onBlur={(data) => setTask(data.target.value)} />
        <button
          onClick={() =>
            dispatch({
              type: "RESET",
            })
          }
        >
          Reset
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "ADD",
              todo: {
                id: state.toDoList.length + 1,
                task: task,
                isDone: false,
              },
            })
          }
        >
          Add Todo
        </button>
      </div>

      {state.toDoList.map((data: TodoListInterface, index: number) => {
        return (
          <div style={{ display: "flex" }}>
            <label
              key={index}
              style={{ color: data.isDone ? "gray" : "black" }}
            >
              {data.task}
            </label>
            <button
              onClick={() =>
                dispatch({
                  type: "DONE",
                  todo: data,
                })
              }
            >
              Mark as done
            </button>
          </div>
        );
      })}
    </div>
  );
};
