import React, {
  createContext,
  Dispatch,
  ReactChild,
  useContext,
  useReducer,
} from "react";
import { editData, getAllData, putData } from "./api/Storage";
import { KeyToDoItem, ToDoItem } from "./Model";

enum ActionType {
  ADD_TASK,
  COMPLETE_TASK,
  LOAD_TASK,
}

type Action = {
  type: ActionType;
  payload: ToDoItem | ToDoItem[] | string;
};

const ToDoContext = createContext<any>(null);

export function reducer(state: ToDoItem[], action: Action) {
  switch (action.type) {
    case ActionType.LOAD_TASK:
      return [...(action.payload as ToDoItem[])];
    case ActionType.ADD_TASK:
      return [action.payload as ToDoItem, ...state];
    case ActionType.COMPLETE_TASK: {
      const id = action.payload as string;
      return changePropertyObjectOfArray(state, id, "completed", true as never);
    }
    default:
      return state;
  }
}

export function addTaskAction(task: ToDoItem) {
  return {
    type: ActionType.ADD_TASK,
    payload: task,
  };
}

export function completeTaskAction(taskId: string) {
  return {
    type: ActionType.COMPLETE_TASK,
    payload: taskId,
  };
}

export function loadTasksAction(payload: ToDoItem[]) {
  return {
    type: ActionType.LOAD_TASK,
    payload,
  };
}

export function ToDoProvider({ children }: { children: ReactChild }) {
  const [todos, dispatch] = useReducer(reducer, []);

  async function addTask(task: ToDoItem) {
    await putData(task.id, task);
    const actionObject = addTaskAction(task);
    dispatch(actionObject);
  }

  async function completeTask(task: ToDoItem) {
    task.completed = true;
    await editData(task.id, task);
    const actionObject = completeTaskAction(task.id);
    dispatch(actionObject);
  }

  async function loadTasks() {
    const data = await getAllData();
    const tasks = loadTasksAction(data);
    dispatch(tasks);
  }

  return (
    <ToDoContext.Provider
      value={{
        todos,
        addTask,
        completeTask,
        loadTasks,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export function useToDo() {
  const context = useContext(ToDoContext);
  if (!context) throw new Error("Need parent ToDoProvider");
  return context;
}

function changePropertyObjectOfArray<KeyVal extends any, Value extends never>(
  array: ToDoItem[],
  _id: KeyVal,
  field: KeyToDoItem,
  value: Value
) {
  return array.reduce((acc: ToDoItem[], el: ToDoItem) => {
    if (el["id"] === _id) {
      el[field] = value;
    }
    acc.push(el);
    return acc;
  }, []);
}
