export type ToDoItem = {
  id: string;
  title: string;
  color: string;
  completed: boolean;
};

export type KeyToDoItem = keyof ToDoItem;
