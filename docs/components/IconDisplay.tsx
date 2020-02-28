/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classNames from 'classnames';

export default function IconDisplay(props) {
  const { name, title, onClick, className } = props;

  return (
    <div className="icon-display">
      <div
        title={title}
        role="button"
        className="icon-display__content"
        onClick={() => onClick(name)}
      >
        <i className={classNames('icons', className)}>{name}</i>
      </div>
      <p>{title}</p>
    </div>
  );
}
