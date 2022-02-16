import { useTranslation } from 'next-i18next';
import { NavItem, NavItemData } from './NavItem';

export const Sidebar = () => {
  const { t } = useTranslation();

  const urlPrefix = `/organizations/${1}/projects/${1}`;

  const menu: NavItemData[] = [
    {
      path: '/dashboard',
      label: t('menuDashboard'),
    },
    {
      label: t('menuReport'),
      children: [
        {
          path: `${urlPrefix}/policy-report`,
          label: t('policyReport'),
          matches: [
            '/organizations/[organizationId]/projects/[projectId]/policy-report/[slug]',
            '/organizations/[organizationId]/projects/[projectId]/policy-report/[slug]/[projectId]',
          ],
        },
        {
          path: `${urlPrefix}/f2-conversion-rate-trends`,
          label: t('f2ConversionRateTrends'),
        },
        {
          path: `${urlPrefix}/semi-royal-conversion-rate`,
          label: t('semiRoyalConversionRate'),
        },
        {
          path: `${urlPrefix}/loyal-conversion-rate`,
          label: t('loyalConversionRate'),
        },
        {
          path: `${urlPrefix}/loyal-customers`,
          label: t('numberOfLoyalCustomers'),
        },
        {
          path: `${urlPrefix}/dormant-customers-return`,
          label: t('returnOfDormantCustomers'),
        },
        {
          path: `${urlPrefix}/f1-dormant-customers-return`,
          label: t('returnOfF1DormantCustomers'),
        },
      ],
    },
    {
      path: '/marketing-action',
      label: t('menuMarketingAction'),
    },
    {
      path: '/actions',
      label: t('menuActions'),
    },
    {
      path: '/my-marketing-action',
      label: t('menuMyMarketingAction'),
    },
    {
      path: '/settings',
      label: t('menuSettings'),
    },
  ];
  return (
    <div className='flex flex-col border-r border-gray-300 bg-gray-light w-[200px]'>
      <div className='flex flex-col flex-grow'>
        {menu.map(menuItem => (
          <NavItem key={menuItem.label} data={menuItem} />
        ))}
      </div>
    </div>
  );
};
