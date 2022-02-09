import { ErrorMessage, Field, FieldProps, Form as HeadlessForm, FormProps } from '@/headless';
import { HTMLDivProps } from '@/types';
import { Input, InputProps, TextArea, TextAreaProps } from '../fields';

// eslint-disable-next-line no-empty-pattern
export const Form = (props: FormProps) => <HeadlessForm {...props} />;

const FormInput = (props: FieldProps & Omit<InputProps, keyof FieldProps>) => <Field {...props} component={Input} />;
const FormTextArea = (props: FieldProps & Omit<TextAreaProps, keyof FieldProps>) => (
  <Field {...props} component={TextArea} />
);

const FormErrorMessage = ({ name, ...restProps }: HTMLDivProps & { name: string }) => (
  <p className='text-danger' {...restProps}>
    <ErrorMessage name={name}></ErrorMessage>
  </p>
);

Form.Input = FormInput;
Form.TextArea = FormTextArea;
Form.ErrorMessage = FormErrorMessage;
