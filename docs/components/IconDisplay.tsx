import React from 'react';
import Icon from './Icon';

export default function IconDisplay(props) {
  const { children, className } = props;
  return (
    <div style={{ width: 48, height: 56 }}>
      <Icon className={className}>{children}</Icon>
      <p>{children}</p>
    </div>
  );
}
