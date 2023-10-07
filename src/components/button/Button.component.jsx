import React from 'react';

export default function Button({
  text,
  className,
  id,
  isActive,
  activeClassName,
}) {
  return (
    <button
      className={`${className} ${isActive ? activeClassName : ''}`}
      id={id}
    >
      {text}
    </button>
  );
}
