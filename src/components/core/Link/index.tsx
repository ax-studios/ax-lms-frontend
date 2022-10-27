import NextLink from 'next/link';
import { FC } from 'react';

interface LinkProps {
  href: string;
}

interface Props
  extends React.PropsWithChildren<LinkProps>,
    Omit<React.ComponentPropsWithoutRef<'a'>, keyof LinkProps> {}

const Link: FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
