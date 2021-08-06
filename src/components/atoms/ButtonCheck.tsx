import React from "react";
import { Feather } from "@expo/vector-icons";

import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  padding: 10px;
`;

const Inner = styled.View<{ colorBorder: string; background?: string | null }>`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  border: solid 2px ${({ colorBorder }) => colorBorder};
  justify-content: center;
  align-items: center;
  ${({ background }) => background && `background: ${background};`};
`;

export function ButtonCheck({
  status,
  onPress,
}: {
  status: boolean;
  onPress: () => void;
}) {
  const color = "green";
  return (
    <Container onPress={onPress}>
      <Inner colorBorder={color} background={status ? color : null}>
        {status && <Feather name="check" size={20} color="white" />}
      </Inner>
    </Container>
  );
}
