import { Layout, Form } from '@/components';
import { Option } from '@/types';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RadioTag } from './RadioTag';
import { TargetFilter } from '../TargetFilter';
import { ReportsTable } from './ReportsTable';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export const ReportList = ({}: Props) => {
  const { t } = useTranslation('report');

  const methods = useForm({
    defaultValues: {
      policyType: 'lineEmail',
    },
  });
  const { watch } = methods;

  const policyType = watch('policyType');

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
            <div className='text-gray-800'>2021年12月13日（月）〜2022年01月11日（火）</div>
          </div>
          <TargetFilter />
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
