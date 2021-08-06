import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${() => `${Dimensions.get("screen").height * 0.85}px;`};
  padding: 30px 30px;
`;

export const ToEnd = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const ScrollV = styled.ScrollView.attrs({})``;
