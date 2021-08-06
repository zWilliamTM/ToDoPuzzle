// title

// normal

// subtitle
import React from "react";
import styled from "styled-components/native";

export const Title = styled.Text<{ left?: string; fsz?: string }>`
  font-size: 25px;
  ${({ left, fsz }) =>
    (left && `left: ${left}px;`) || (fsz && `font-size: ${fsz}px;`)};
  font-weight: bold;
`;
