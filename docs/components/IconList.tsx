/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Dialog, { DialogTitle } from 'sinoui-components/Dialog';
import iconsData from './icon-data';
import IconDisplay from './IconDisplay';
import transferName from './transferName';
import IconInfoDialog from './IconInfoDialog';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledDialog = styled(Dialog)`
  width: 600px;
`;

export default function IconList() {
  const [selectedIconName, setSelectedIconName] = useState('');
  const [iconType, setIconType] = useState('filled');
  const [open, setOpen] = useState(false);

  const onRequestClose = () => {
    setOpen(false);
  };

  const onIconClick = (iconName) => {
    setSelectedIconName(iconName);
    setOpen(true);
  };

  const title = useMemo(() => {
    return transferName(selectedIconName);
  }, [selectedIconName]);

  return (
    <Layout>
      {iconsData.map((icon) => (
        <IconDisplay
          key={icon.name}
          onClick={onIconClick}
          className="material-icons"
        >
          {icon.name}
        </IconDisplay>
      ))}
      <StyledDialog open={open} showCloseIcon onRequestClose={onRequestClose}>
        <DialogTitle>{title}</DialogTitle>
        <IconInfoDialog
          title={title}
          iconTitle={selectedIconName}
          iconType={iconType}
        />
      </StyledDialog>
    </Layout>
  );
}
