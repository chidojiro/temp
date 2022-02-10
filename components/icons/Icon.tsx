import React from 'react';
import Group from '/public/images/group.svg';

const ICONS = {
  group: Group,
};

export type Props = React.SVGProps<SVGSVGElement> & {
  size?: number;
  name: keyof typeof ICONS;
};

export const Icon = ({ name, size = 10, className, ...restProps }: Props) => {
  const Component = ICONS[name];

  return <Component className={className} width={size} height={size} {...restProps} />;
};
