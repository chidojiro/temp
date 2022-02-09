import { ErrorMessage, Form } from '@/headless/Form';
import { useStateToggle } from '@/hooks';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button } from './common/Button';
import { Input } from './common/fields';

type Props = {
  onSubmit: (data: any) => void;
};

const LoginForm = ({ onSubmit }: Props) => {
  const { t } = useTranslation();
  const schema = yup.object({
    email: yup.string().required(t('Field is required')).email(t('Email is invalid')),
    password: yup.string().required(t('Field is required')),
  });
  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const {
    register,
    formState: { errors },
  } = methods;

  const [showPwd, toggleShowPwd] = useStateToggle(false);
  const icon = showPwd ? <EyeIcon className='w-5 h-5' /> : <EyeOffIcon className='w-5 h-5' />;

  return (
    <div className='w-96'>
      <div className='mb-5 font-bold text-center text-h4 text-dark-gray-1'>{t('login')}</div>
      <Form methods={methods} onSubmit={onSubmit}>
        <Input
          {...register('email')}
          className='w-full mb-2.5'
          htmlType='email'
          placeholder={t('email')}
          error={!!errors?.email?.message}
        />
        <ErrorMessage name='email' className='mb-3'></ErrorMessage>
        <Input
          {...register('password')}
          className='w-full mb-5'
          htmlType={showPwd ? 'text' : 'password'}
          placeholder={t('password')}
          innerRight={<div onClick={() => toggleShowPwd()}>{icon}</div>}
        />
        <ErrorMessage name='password' className='mb-3'></ErrorMessage>
        <Button type='submit' className='w-full font-bold'>
          {t('login')}
        </Button>
        <div className='mt-5 text-center underline text-medium text-light-blue'>{t('forgotPassword')}</div>
      </Form>
    </div>
  );
};

export default LoginForm;
