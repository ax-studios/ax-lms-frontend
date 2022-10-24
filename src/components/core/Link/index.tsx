import NextLink from 'next/link';
import { FC, ReactNode } from 'react';
interface Props {
  href: string;
  children: ReactNode;
}

const Link: FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
