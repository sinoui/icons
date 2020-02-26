import React from 'react';
import SvgIcon from '@sinoui/core/SvgIcon';

/**
 * 创建SVG图标
 * @param path 图标路径
 * @param displayName 图标名称
 */
export default function createSvgIcon(path: HTMLElement, displayName: string) {
  const Component = React.memo(
    React.forwardRef((props, ref) => (
      <SvgIcon data-testid={`${displayName}Icon`} ref={ref} {...props}>
        {path}
      </SvgIcon>
    )),
  );

  Component.displayName = `${displayName}Icon`;

  return Component;
}
