import React from "react";
import styled from "styled-components/native";
import { ToDoItem } from "../../Model";
import { ButtonCheck } from "../atoms";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 1;
`;

export function Task({
  data,
  onPress,
}: {
  data: ToDoItem;
  onPress: (task: ToDoItem) => void;
}) {
  function complete() {
    onPress(data);
  }
  return (
    <Container>
      <ButtonCheck status={data.completed} onPress={complete} />
      <Text>{data.title}</Text>
    </Container>
  );
}
