import {
  CheckboxGroup as HeadlessCheckboxGroup,
  CheckboxGroupOptionProps,
  CheckboxGroupProps as HeadlessCheckboxGroupProps,
} from '@/headless';
import { Checkbox, CheckboxProps } from '../Checkbox';

// eslint-disable-next-line @typescript-eslint/ban-types
type OptionProps = CheckboxGroupOptionProps & CheckboxProps & {};

const Option = ({ children, value, shouldChange, ...restProps }: OptionProps) => {
  if (children)
    return (
      <HeadlessCheckboxGroup.Option value={value} shouldChange={shouldChange}>
        {children}
      </HeadlessCheckboxGroup.Option>
    );

  return (
    <HeadlessCheckboxGroup.Option value={value} shouldChange={shouldChange}>
      {({ handleChange, isChecked, value }) => (
        <Checkbox checked={isChecked} value={value} onChange={handleChange} {...restProps} />
      )}
    </HeadlessCheckboxGroup.Option>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = HeadlessCheckboxGroupProps & {};

// eslint-disable-next-line no-empty-pattern
export const CheckboxGroup = ({ ...restProps }: Props) => {
  return <HeadlessCheckboxGroup {...restProps} />;
};

CheckboxGroup.Option = Option;
