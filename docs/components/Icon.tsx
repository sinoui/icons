/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import calcColor from './calcColor';

const IconWrapper = styled.span`
  color: ${({ color, theme }) => calcColor(color, theme)};
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Icon(props) {
  const { color, ...other } = props;
  return (
    <IconWrapper color={color}>
      <i {...other} />
    </IconWrapper>
  );
}
