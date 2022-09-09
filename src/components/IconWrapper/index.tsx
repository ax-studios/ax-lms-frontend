import { FC, ReactElement } from 'react';

interface IconWrapperProps {
  children: ReactElement;
  width?: number;
  height?: number;
}

const IconWrapper: FC<IconWrapperProps> = ({
  children,
  width = 24,
  height = 24,
}) => {
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>{children}</div>
  );
};

export default IconWrapper;
