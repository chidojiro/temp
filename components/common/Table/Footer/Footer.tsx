import classNames from 'classnames';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {};

export const Footer = ({ className, ...restProps }: Props) => {
  return <footer {...restProps} className={classNames('mp-table-footer', className)}></footer>;
};
