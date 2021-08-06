import React from "react";
import styled from "styled-components/native";
import { ToDoItem } from "../../Model";
import { Title } from "../atoms";
import { Task } from "./Task";

const Container = styled.View`
  flex: 1;
  margin-bottom: 40px;
`;

export function List({
  title,
  data,
  onComplete,
}: {
  title: string;
  data: ToDoItem[];
  onComplete?: (task: ToDoItem) => void;
}) {
  return (
    <Container>
      <Title>{title}</Title>
      {data?.map((el, i) => (
        <Task
          key={i}
          data={el}
          onPress={!!onComplete ? onComplete : () => {}}
        />
      ))}
    </Container>
  );
}
