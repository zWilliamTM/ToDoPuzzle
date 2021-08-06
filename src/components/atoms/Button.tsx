import React, { ReactChild } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  background-color: rgb(38, 192, 110);
  padding: 13px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 15px;
`;

export function Button({
  children,
  onPress,
}: {
  children: ReactChild;
  onPress: () => void;
}) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
}
