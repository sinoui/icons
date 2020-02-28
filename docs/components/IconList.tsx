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
import getIconCategories from './getIconCategories';
import IconListStyle from './IconListStyle';

const categories = getIconCategories();

const StyledDialog = styled(Dialog)`
  width: 600px;
`;

const PageContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Category = React.memo(
  ({ icons, categoryName, onIconClick, className, getIconName }: any) => {
    const iconsInCategory = icons.filter((icon) =>
      icon.categories.includes(categoryName.toLocaleLowerCase()),
    );

    return iconsInCategory.length > 0 ? (
      <div className="category">
        <hr />
        <h3>{categoryName}</h3>
        <PageContent>
          {iconsInCategory.map((icon) => (
            <IconDisplay
              key={icon.name}
              onClick={onIconClick}
              className={className}
              name={icon.name}
              title={transferName(getIconName(icon.name))}
            />
          ))}
        </PageContent>
      </div>
    ) : null;
  },
);

export default function IconList() {
  const [selectedIconName, setSelectedIconName] = useState('');
  const [iconType, setIconType] = useState('filled');
  const [filterValue, setFilterValue] = useState('');
  const [open, setOpen] = useState(false);

  const onRequestClose = () => {
    setOpen(false);
  };

  const onIconClick = useCallback((iconName) => {
    setSelectedIconName(iconName);
    setOpen(true);
  }, []);

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
    <div>
      <IconListStyle />
      <div className="page-header">
        <TextInput
          value={filterValue}
          onChange={handleInputChange}
          placeholder="输入关键字查找图标"
        />
        <RadioGroup value={iconType} onChange={handleIconTypeChange}>
          <Radio value="filled">Filled</Radio>
          <Radio value="outlined">Outlined</Radio>
          <Radio value="round">Rounded</Radio>
          <Radio value="sharp">Sharp</Radio>
          <Radio value="two-tone">Two-Tone</Radio>
        </RadioGroup>
      </div>

      <div>
        {categories.map((category) => (
          <Category
            key={category}
            categoryName={category}
            onIconClick={onIconClick}
            className={className}
            getIconName={getIconName}
            icons={renderIcons}
          />
        ))}
      </div>

      <StyledDialog open={open} showCloseIcon onRequestClose={onRequestClose}>
        <DialogTitle>{title}</DialogTitle>
        <IconInfoDialog
          title={title}
          iconTitle={selectedIconName}
          iconType={iconType}
        />
      </StyledDialog>
    </div>
  );
}
