import { Layout, Form } from '@/components';
import { Option } from '@/types';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CheckboxTag } from './CheckboxTag';
import { RadioTag } from './RadioTag';
import { ReportsTable } from './ReportsTable';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export const Reports = ({}: Props) => {
  const { t } = useTranslation('report');

  const methods = useForm({
    defaultValues: {
      policyType: 'lineEmail',
    },
  });
  const { watch } = methods;

  const policyType = watch('policyType');

  const targetOptions = React.useMemo<Option[]>(
    () => [
      { label: t('all'), value: 'all' },
      { label: t('f0member'), value: 'f0member' },
      { label: t('f0others'), value: 'f0others' },
      { label: t('F1'), value: 'f1' },
      { label: t('F2'), value: 'f2' },
      { label: t('semiRoyal'), value: 'semiRoyal' },
      { label: t('royal'), value: 'royal' },
      { label: t('f1dormant'), value: 'f1dormant' },
      { label: t('royalDormant'), value: 'royalDormant' },
    ],
    [t]
  );

  const policyTypeOptions = React.useMemo<Option[]>(
    () => [
      { label: t('lineEmail'), value: 'lineEmail' },
      { label: t('chatbot'), value: 'chatbot' },
      { label: t('popUp'), value: 'popUp' },
    ],
    [t]
  );

  return (
    <Layout title={t('measureReport')} subTitle={t('list')}>
      <Form methods={methods}>
        <div className='space-y-5'>
          <div className='flex items-center gap-5'>
            <div className='font-bold'>{t('period')}</div>
            <div>2021年12月13日（月）〜2022年01月11日（火）</div>
          </div>
          <div className='flex items-center gap-8'>
            <div className='font-bold'>{t('target')}</div>
            <div className='flex items-center gap-2'>
              <Form.CheckboxGroup name='target'>
                {targetOptions.map(({ value, label }) => (
                  <CheckboxTag value={value} label={label} key={value} />
                ))}
              </Form.CheckboxGroup>
            </div>
          </div>
          <div className='flex items-center gap-8'>
            <div className='font-bold'>{t('policyType')}</div>
            <div className='flex items-center gap-2'>
              <Form.RadioGroup name='policyType'>
                {policyTypeOptions.map(({ value, label }) => (
                  <RadioTag value={value} label={label} key={value} />
                ))}
              </Form.RadioGroup>
            </div>
          </div>
        </div>
        <ReportsTable policyType={policyType as any} className='mt-10' />
      </Form>
    </Layout>
  );
};
