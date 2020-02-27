/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const IconDisplayLayout = styled.div`
  width: 120px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    width: 96px;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.background.paper};
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

export default function IconDisplay(props) {
  const { name, title, className, onClick } = props;

  return (
    <IconDisplayLayout>
      <IconWrapper onClick={() => onClick(name)}>
        <Icon className={className}>{name}</Icon>
      </IconWrapper>
      <p>{title}</p>
    </IconDisplayLayout>
  );
}
