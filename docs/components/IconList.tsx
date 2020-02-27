import React from 'react';
import iconsData from './icon-data';
import IconDisplay from './IconDisplay';

export default function IconList() {
  return (
    <div>
      {iconsData.map((icon) => (
        <IconDisplay key={icon.name} className="material-icons">
          {icon.name}
        </IconDisplay>
      ))}
    </div>
  );
}
