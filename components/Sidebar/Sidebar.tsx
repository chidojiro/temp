import { NavItemInfo } from '@/types/navbar'
import { ChartBarIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Sidebar = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const menu: NavItemInfo[] = [
    {
      path: '/dashboard',
      label: t('menuDashboard'),
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
      path: '/settings',
      label: t('menuSettings'),
    },
  ]
  return (
    <div className='flex flex-col bg-white border-r border-gray-200 bg-light-gray'>
      <div className='flex flex-col flex-grow'>
        {menu.map(menuItem => (
          <Link key={menuItem.label} href={menuItem.path}>
            <a
              className={classNames('flex text-medium items-center px-6 py-2.5 hover:bg-dark-gray', {
                'bg-dark-gray': menuItem.path === router.pathname,
              })}>
              <ChartBarIcon className='w-4 h-4 mr-2 text-primary' />
              {menuItem.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
