/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import Dialog, { DialogTitle } from 'sinoui-components/Dialog';
import TextInput from 'sinoui-components/TextInput';
import Radio, { RadioGroup } from 'sinoui-components/Radio';
import filterIcons from './filterIconUtils';
import IconDisplay from './IconDisplay';
import transferName from './transferName';
import IconInfoDialog from './IconInfoDialog';

const Layout = styled.div``;

const StyledDialog = styled(Dialog)`
  width: 600px;
`;

const PageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  > .sinoui-input-wrapper {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function IconList() {
  const [selectedIconName, setSelectedIconName] = useState('');
  const [iconType, setIconType] = useState('filled');
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = useState(false);

  const onRequestClose = () => {
    setOpen(false);
  };

  const onIconClick = (iconName) => {
    setSelectedIconName(iconName);
    setOpen(true);
  };

  const handleIconTypeChange = useCallback((_event, value) => {
    setIconType(value);
  }, []);

  const handleInputChange = useCallback((event) => {
    setFilterValue(event.target.value);
  }, []);

  const className = useMemo(() => {
    if (iconType === 'filled') {
      return 'material-icons';
    }
    return `material-icons-${iconType}`;
  }, [iconType]);

  const getIconName = useCallback(
    (name: string) => {
      if (iconType === 'filled') {
        return name;
      }
      if (iconType === 'round') {
        return `${name}_rounded`;
      }
      if (iconType === 'two-tone') {
        return `${name}_two_tone`;
      }

      return `${name}_${iconType}`;
    },
    [iconType],
  );

  const title = useMemo(() => {
    return transferName(getIconName(selectedIconName));
  }, [getIconName, selectedIconName]);

  const renderIcons = useMemo(() => filterIcons(filterValue), [filterValue]);

  return (
    <Layout>
      <PageHeader>
        <TextInput value={filterValue} onChange={handleInputChange} />
        <RadioGroup value={iconType} onChange={handleIconTypeChange}>
          <Radio value="filled">Filled</Radio>
          <Radio value="outlined">Outlined</Radio>
          <Radio value="round">Rounded</Radio>
          <Radio value="sharp">Sharp</Radio>
          <Radio value="two-tone">Two-Tone</Radio>
        </RadioGroup>
      </PageHeader>

      <PageContent>
        {renderIcons.map((icon) => (
          <IconDisplay
            key={icon.name}
            onClick={onIconClick}
            className={className}
            name={icon.name}
            title={transferName(getIconName(icon.name))}
          />
        ))}
      </PageContent>

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
