import React from "react";
import styled from "styled-components/native";
import { Title } from "./Labels";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";

const Container = styled.View<{ width?: number }>`
  margin-bottom: 20px;

  ${({ width }) => width && `width: ${width}px;`};
`;

const InputContainer = styled.View`
  padding: 12px 16px;
  background-color: whitesmoke;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
`;

const MInput = styled.TextInput``;

type Icon = "chevron-down" | "clock";

export function Input(props: {
  title: string;
  placeholder: string;
  value: string;
  width?: number;
  icon?: Icon;
  onChangeText: (text: string) => void;
}) {
  return (
    <Container width={props.width}>
      <Title fsz="18">{props.title}</Title>
      <InputContainer>
        <MInput {...props} />
        {props.icon && (
          <Feather
            style={
              props.width
                ? { left: -Dimensions.get("screen").width * 0.12 }
                : {}
            }
            name={props.icon}
            size={20}
            color="#bbb"
          />
        )}
      </InputContainer>
    </Container>
  );
}
