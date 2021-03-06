import { RadioGroup } from '@/components';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import URI from 'urijs';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  value: string;
  label: React.ReactNode;
};

// eslint-disable-next-line no-empty-pattern
export const RadioTag = ({ value, label }: Props) => {
  const getHref = () => {
    const uri = new URI();
    const segments = uri.segment();
    const newSegments = [...segments.slice(0, segments.length - 1), value];
    return '/' + newSegments.join('/');
  };

  return (
    <RadioGroup.Option value={value}>
      {({ handleChange, isChecked, value }) => (
        <Link href={getHref()} passHref>
          <label
            className={classNames(
              'rounded-full px-4 py-1.5 font-bold cursor-pointer text-medium',
              'flex items-center gap-1',
              'border border-solid',
              {
                'border-gray-500 bg-white': !isChecked,
                'bg-primary border-primary text-white': isChecked,
              }
            )}>
            <div
              className={classNames('w-3 h-3 rounded-full', 'flex items-center justify-center', {
                'bg-gray-300': !isChecked,
                'bg-white': isChecked,
              })}>
              {!!isChecked && <div className='w-1.5 h-1.5 rounded-full bg-primary'></div>}
            </div>
            <span>{label}</span>
            <input type='checkbox' value={value} onChange={handleChange} className='minimized' />
          </label>
        </Link>
      )}
    </RadioGroup.Option>
  );
};
