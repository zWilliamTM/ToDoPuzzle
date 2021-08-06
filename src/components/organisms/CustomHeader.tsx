import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";

import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { Title } from "../atoms";

const Container = styled.SafeAreaView<{ between: boolean }>`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom-width: 2px;
  border-bottom-color: whitesmoke;
  ${({ between }) => between && "justify-content: flex-start;"};
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  right: 15px;
`;

const Touchable = styled.TouchableOpacity`
  padding: 10px;
`;

export function CustomHeader(props: NativeStackHeaderProps) {
  const { back, navigation, route, options } = props;
  const { title } = options;
  function goBack() {
    navigation.goBack();
  }

  const BackButton = () =>
    back ? (
      <Touchable onPress={goBack}>
        <Feather name="chevron-left" size={25} color="black" />
      </Touchable>
    ) : (
      <></>
    );

  return (
    <Container between={!!back}>
      <BackButton />
      <Title left={!!back ? "10" : "25"}>{title}</Title>
      {!back && (
        <Row>
          <Touchable>
            <Feather name="search" size={25} color="gray" />
          </Touchable>
          <Touchable>
            <Feather name="bell" size={25} color="gray" />
          </Touchable>
          <Touchable>
            <Feather name="menu" size={25} color="gray" />
          </Touchable>
        </Row>
      )}
    </Container>
  );
}
