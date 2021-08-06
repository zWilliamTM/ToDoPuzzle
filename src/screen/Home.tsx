import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, Container, List, ScrollV, ToEnd } from "../components";
import { useToDo } from "../Context";
import { ToDoItem } from "../Model";

export function Home() {
  const { todos, loadTasks, completeTask } = useToDo();
  const navigation = useNavigation();

  async function toCompleted(task: ToDoItem) {
    await completeTask(task);
  }
  function goEdit() {
    navigation.navigate("edit" as never);
  }

  useEffect(() => {
    loadTasks();
    //clearData();
  }, []);

  const completed = todos?.filter((el: ToDoItem) => el.completed);
  const pending = todos?.filter((el: ToDoItem) => !el.completed);

  return (
    <Container>
      <ScrollV>
        <List title="Completed Tasks" data={completed} />
        <List title="Pending Tasks" data={pending} onComplete={toCompleted} />
      </ScrollV>
      <ToEnd>
        <Button onPress={goEdit}>Add a task</Button>
      </ToEnd>
    </Container>
  );
}
