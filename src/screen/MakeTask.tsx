import React, { useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Container, Input, ScrollV, ToEnd } from "../components";

import styled from "styled-components/native";
import { Dimensions, View } from "react-native";
import { useToDo } from "../Context";
import { useNavigation } from "@react-navigation/native";

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export function MakeTask() {
  const navigation = useNavigation();
  const { addTask } = useToDo();
  const [title, setTitle] = useState("");

  async function submit() {
    if (!title.length) {
      return;
    }
    await addTask({
      id: "t" + Date.now(),
      color: "green",
      completed: false,
      title: title,
    });
    navigation.goBack();
  }

  return (
    <KeyboardAwareScrollView>
      <Container>
        <Input
          title="Title"
          placeholder="Design team meeting"
          value={title}
          onChangeText={(t) => setTitle(t)}
        />

        <Input
          icon="chevron-down"
          title="Deadline"
          placeholder="2021-02-28"
          value={""}
          onChangeText={(t) => {}}
        />
        <Row>
          <Input
            icon="clock"
            width={Dimensions.get("screen").width * 0.39}
            title="Start time"
            placeholder="11:00 Am"
            value={""}
            onChangeText={(t) => {}}
          />
          <Input
            icon="clock"
            width={Dimensions.get("screen").width * 0.39}
            title="End time"
            placeholder="14:00 Pm"
            value={""}
            onChangeText={(t) => {}}
          />
        </Row>

        <Input
          icon="chevron-down"
          title="Remind"
          placeholder="10 minutes early"
          value={""}
          onChangeText={(t) => {}}
        />

        <Input
          icon="chevron-down"
          title="Repeat"
          placeholder="Weekly"
          value={""}
          onChangeText={(t) => {}}
        />
        <ToEnd>
          <Button onPress={submit}>Create a Task</Button>
        </ToEnd>
      </Container>
    </KeyboardAwareScrollView>
  );
}
