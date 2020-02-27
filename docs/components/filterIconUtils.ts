import icons from './icon-data';
import transferName from './transferName';

export default function filterIcons(filterValue) {
  const filterText = filterValue
    .split('_')
    .join('')
    .toLowerCase();

  return icons.filter((icon) => {
    const iconName = icon.name.split('_').join('');
    const iconTitle = transferName(icon.name).toLowerCase();
    return (
      iconName.indexOf(filterText) !== -1 ||
      icon.tags.indexOf(filterText) !== -1 ||
      iconTitle.indexOf(filterText) !== -1
    );
  });
}
