import React from 'react';
import { ClassNameUtils } from '@/utils/className';
import { Children, ClassName, HTMLButtonProps } from 'types';

type Variant = 'link' | 'outline' | 'solid';

const primaryBackgroundColor: { [key in Variant]: string } = {
  link: 'bg-none',
  outline: 'bg-none',
  solid: 'bg-primary',
};

const secondaryBackgroundColor: { [key in Variant]: string } = {
  link: 'bg-none',
  outline: 'bg-none',
  solid: 'bg-secondary',
};

const dangerBackgroundColor: { [key in Variant]: string } = {
  link: 'bg-none',
  outline: 'bg-none',
  solid: 'bg-danger',
};

const defaultBackgroundColor: { [key in Variant]: string } = {
  link: 'bg-none',
  outline: 'bg-none',
  solid: 'bg-white',
};

const primaryBorderColor: { [key in Variant]: string } = {
  link: 'border-none',
  outline: 'border-primary',
  solid: 'border-none',
};

const secondaryBorderColor: { [key in Variant]: string } = {
  link: 'border-none',
  outline: 'border-secondary',
  solid: 'border-none',
};

const defaultBorderColor: { [key in Variant]: string } = {
  link: 'border-none',
  outline: 'border-white',
  solid: 'border-none',
};

const primaryTextColor: { [key in Variant]: string } = {
  link: 'text-primary',
  outline: 'text-white',
  solid: 'text-white',
};

const secondaryTextColor: { [key in Variant]: string } = {
  link: 'text-secondary',
  outline: 'text-secondary',
  solid: 'text-white',
};

const dangerTextColor: { [key in Variant]: string } = {
  link: 'text-danger',
  outline: 'text-danger',
  solid: 'text-white',
};

const defaultTextColor: { [key in Variant]: string } = {
  link: 'text-black',
  outline: 'text-black',
  solid: 'text-white',
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = Children &
  ClassName &
  Pick<HTMLButtonProps, 'disabled' | 'type' | 'onClick'> & {
    variant?: Variant;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    colorScheme?: 'primary' | 'secondary' | 'default' | 'danger';
    icon?: React.ReactNode;
    loading?: boolean;
  };

export const Button = React.forwardRef<HTMLElement, Props>(
  (
    {
      variant = 'solid',
      size = 'md',
      colorScheme = 'primary',
      className,
      children,
      type = 'button',
      disabled,
      icon,
      loading,
      ...restProps
    },
    ref: any
  ) => {
    const backgroundColor = (() => {
      switch (colorScheme) {
        case 'primary':
          return primaryBackgroundColor[variant];
        case 'secondary':
          return secondaryBackgroundColor[variant];
        case 'danger':
          return dangerBackgroundColor[variant];
        default:
          return defaultBackgroundColor[variant];
      }
    })();

    const borderColor = (() => {
      switch (colorScheme) {
        case 'primary':
          return primaryBorderColor[variant];
        case 'secondary':
          return secondaryBorderColor[variant];
        default:
          return defaultBorderColor[variant];
      }
    })();

    const textColor = (() => {
      switch (colorScheme) {
        case 'primary':
          return primaryTextColor[variant];
        case 'secondary':
          return secondaryTextColor[variant];
        case 'danger':
          return dangerTextColor[variant];
        default:
          return defaultTextColor[variant];
      }
    })();

    const outline = (() => {
      switch (variant) {
        case 'link':
          return 'bg-none';
        default:
          return 'shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
      }
    })();

    const fontWeight = (() => {
      switch (size) {
        case 'xs':
          return 'text-xs';
        default:
          return 'text-base';
      }
    })();

    const padding = (() => {
      switch (size) {
        case 'xs':
          return 'py-1.5 px-4';
        default:
          return 'px-6 py-2';
      }
    })();

    return (
      <button
        ref={ref}
        {...restProps}
        type={type}
        className={ClassNameUtils.withTwReplaceable('px-', 'py-', 'bg-', 'rounded')(
          'inline-flex justify-center items-center border rounded select-none',
          textColor,
          backgroundColor,
          borderColor,
          // outline,
          fontWeight,
          padding,
          {
            'bg-gray-1 text-black cursor-default pointer-events-none': disabled,
            'cursor-default pointer-events-none opacity-70': loading,
          },
          className
        )}
      >
        {!!icon && <div className='mr-3'>{icon}</div>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
