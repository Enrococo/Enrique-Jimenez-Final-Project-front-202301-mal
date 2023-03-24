import React, { FC } from 'react';

interface SquareProps {
  children: JSX.Element | undefined;
}

export const Square: FC<SquareProps> = ({ children }) => {
  const fill = '#ffffff33';

  return (
    <div
      style={{
        backgroundColor: fill,
        border: '1px solid var(--color-tertiary-clear)',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};
