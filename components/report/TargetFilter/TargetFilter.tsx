import React from 'react';
import { Option } from '@/types';
import { useTranslation } from 'next-i18next';
import { Form } from '@/components';
import { CheckboxTag } from './CheckboxTag';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
export const TargetFilter = ({}: Props) => {
  const { t } = useTranslation('report');

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

  return (
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
  );
};
