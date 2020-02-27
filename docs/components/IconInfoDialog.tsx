/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo } from 'react';
import { DialogContent } from 'sinoui-components/Dialog';
import styled from 'styled-components';
import Icon from './Icon';
import calcColor from './calcColor';

const SubTileLayout = styled.div`
  background-color: ${(props) => props.theme.palette.background.snackbar};
  min-height: 48px;
  padding: 12px 16px;
  color: #fff;
  box-sizing: border-box;
  margin-bottom: 24px;
`;

const IconPreviewLayout = styled.div`
  display: flex;
`;

const LeftLayout = styled.div`
  width: 276px;
  text-align: center;

  > span > i {
    font-size: 120px;
  }
`;

const RightLayout = styled.div`
  width: 276px;
  display: flex;
  justify-content: center;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  border-radius: 4px;

  ${({ bgColor, theme }) =>
    bgColor &&
    `background-color:${calcColor(bgColor, theme)}; > span > i {
      color: #fff;
    }`}
`;

export default function IconInfoDialog(props) {
  const { title, iconTitle, iconType } = props;

  const className = useMemo(() => {
    if (iconType === 'filled') {
      return 'material-icons';
    }
    return `material-icons-${iconType}`;
  }, [iconType]);

  return (
    <DialogContent>
      <SubTileLayout>
        import {title} from &apos;@sinoui/icons/{title}&apos;;
      </SubTileLayout>
      <IconPreviewLayout>
        <LeftLayout>
          <Icon color="primary" className={className}>
            {iconTitle}
          </Icon>
        </LeftLayout>
        <RightLayout>
          <div>
            <IconWrapper>
              <Icon color="primary" className={className}>
                {iconTitle}
              </Icon>
            </IconWrapper>
            <IconWrapper>
              <Icon className={className}>{iconTitle}</Icon>
            </IconWrapper>
            <IconWrapper>
              <Icon color="textSecondary" className={className}>
                {iconTitle}
              </Icon>
            </IconWrapper>
          </div>
          <div>
            <IconWrapper bgColor="primary">
              <Icon className={className}>{iconTitle}</Icon>
            </IconWrapper>
            <IconWrapper bgColor="textPrimary">
              <Icon className={className}>{iconTitle}</Icon>
            </IconWrapper>
            <IconWrapper bgColor="textSecondary">
              <Icon className={className}>{iconTitle}</Icon>
            </IconWrapper>
          </div>
        </RightLayout>
      </IconPreviewLayout>
    </DialogContent>
  );
}
