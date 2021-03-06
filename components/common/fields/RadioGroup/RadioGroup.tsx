import {
  RadioGroup as HeadlessRadioGroup,
  RadioGroupOptionProps,
  RadioGroupProps as HeadlessRadioGroupProps,
} from '@/headless';
import React from 'react';
import { Radio, RadioProps } from '../Radio';

// eslint-disable-next-line @typescript-eslint/ban-types
type OptionProps = RadioGroupOptionProps & RadioProps & {};

const Option = ({ children, value, shouldChange, ...restProps }: OptionProps) => {
  if (children)
    return (
      <HeadlessRadioGroup.Option value={value} shouldChange={shouldChange}>
        {children}
      </HeadlessRadioGroup.Option>
    );

  return (
    <HeadlessRadioGroup.Option value={value} shouldChange={shouldChange}>
      {({ handleChange, isChecked, value }) => (
        <Radio checked={isChecked} value={value} onChange={handleChange} {...restProps} />
      )}
    </HeadlessRadioGroup.Option>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = HeadlessRadioGroupProps & {};

// eslint-disable-next-line no-empty-pattern
const RadioGroup_ = React.forwardRef<any, Props>(({ children, ...restProps }, ref) => {
  return (
    <HeadlessRadioGroup {...restProps}>
      <input className='minimized' ref={ref} />
      {children}
    </HeadlessRadioGroup>
  );
});

RadioGroup_.displayName = 'RadioGroup';
(RadioGroup_ as any).Option = Option;

export const RadioGroup = RadioGroup_ as typeof RadioGroup_ & { Option: typeof Option };
