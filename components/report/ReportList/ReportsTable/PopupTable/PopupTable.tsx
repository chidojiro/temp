import { Table } from '@/components';
import { ClassName } from '@/types';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import URI from 'urijs';

const data = [
  {
    id: '0',
    name: 'all',
    numberOfUUsDisplayed: '5,000',
    openUuRate: '200（4.0%）',
    cvUuRate: {
      intermediateCv: {
        rate: '12（0.2％）',
      },
      finalCv: {
        rate: '12（0.2％）',
        price: '256,000円',
      },
    },
  },
  {
    id: '1',
    name: 'LINE友だち追加',
    numberOfUUsDisplayed: '5,000',
    openUuRate: '200（4.0%）',
    cvUuRate: {
      intermediateCv: {
        rate: '12（0.2％）',
      },
      finalCv: {
        rate: '12（0.2％）',
        price: '256,000円',
      },
    },
  },
  {
    id: '2',
    name: 'セール商品',
    numberOfUUsDisplayed: '5,000',
    openUuRate: '200（4.0%）',
    cvUuRate: {
      intermediateCv: {
        rate: '12（0.2％）',
      },
      finalCv: {
        rate: '12（0.2％）',
        price: '256,000円',
      },
    },
  },
  {
    id: '3',
    name: 'オンライン商談訴求',
    numberOfUUsDisplayed: '5,000',
    openUuRate: '200（4.0%）',
    cvUuRate: {
      intermediateCv: {
        rate: '12（0.2％）',
      },
      finalCv: {
        rate: '12（0.2％）',
        price: '256,000円',
      },
    },
  },
];

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = ClassName & {};

// eslint-disable-next-line no-empty-pattern
export const PopupTable = ({ className }: Props) => {
  const { t } = useTranslation('report');
  const uri = new URI();

  return (
    <Table className={className}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>{t('measure')}</Table.Cell>
          <Table.Cell>{t('numberOfUUsDisplayed')}</Table.Cell>
          <Table.Cell>{t('openUuRate')}</Table.Cell>
          <Table.Cell>{t('cvUuRate')}</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map(item => (
          <Table.Row key={item.id}>
            <Table.Header>
              {item.name === 'all' ? (
                t('all')
              ) : (
                <Link passHref href={uri.segment(item.id).href()}>
                  <a className='underline text-primary'>{item.name}</a>
                </Link>
              )}
            </Table.Header>
            <Table.Cell className='text-right'>{item.numberOfUUsDisplayed}</Table.Cell>
            <Table.Cell className='text-right'>{item.openUuRate}</Table.Cell>
            <Table.Cell>
              <div className='flex'>
                <div className='text-orange'>{t('intermediateCv') + t('colon')}</div>
                <div>{item.cvUuRate.intermediateCv.rate}</div>
              </div>
              <div className='flex mt-2'>
                <div className='text-primary'>{t('finalCv') + t('colon')}</div>
                <div>
                  <div>{item.cvUuRate.finalCv.rate}</div>
                  <div>{item.cvUuRate.finalCv.price}</div>
                </div>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
