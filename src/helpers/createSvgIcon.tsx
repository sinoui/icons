import React from 'react';
import clsx from 'clsx';

/**
 * SvgIcon组件属性类型
 */
export interface SvgIconProps {
  /**
   * 指定图标内容
   */
  children?: React.ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 指定自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 设置 svg 元素的 viewBox，默认为0 0 24 24
   */
  viewBox?: string;
  /**
   * 指定图标的标题
   */
  title?: string;
  /**
   * 不设置图标大小。一般用于`<SvgIcon as={CustomIcon} disabledViewBox />`，这种情况下，CustomIcon已有了`viewBox`。
   */
  disabledViewBox?: boolean;
}

/**
 * Svg图标组件
 */
const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
  const { disabledViewBox, title, children, className, ...rest } = props;
  return (
    <svg
      ref={ref}
      viewBox={!disabledViewBox ? '0 0 24 24' : undefined}
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : 'presentation'}
      focusable="false"
      className={clsx(
        'sinoui-svg-icon',
        className,
        'w-[1em]',
        'h-[1em]',
        'fill-current',
        'shrink-0',
        'transition',
        'select-none',
        'inline-block',
      )}
      {...rest}
    >
      <>
        {!!title && <title>{title}</title>}
        {children}
      </>
    </svg>
  );
});

if (process.env.NODE_ENV === 'development') {
  SvgIcon.displayName = 'SvgIcon';
}

/**
 * 创建SVG图标
 * @param path 图标路径
 * @param displayName 图标名称
 */
export default function createSvgIcon(path: any, displayName: string) {
  const Component = React.memo(
    React.forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => (
      <SvgIcon data-testid={`${displayName}Icon`} ref={ref} {...props}>
        {path}
      </SvgIcon>
    )),
  );

  Component.displayName = `${displayName}Icon`;

  return Component;
}
