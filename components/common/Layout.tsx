import { ReactNode } from 'react'
import { Sidebar } from '../Sidebar'
import Header from './Header'
import { MainContent } from './MainContent'

type Props = {
  title: string
  subTitle?: string
  children: ReactNode
}

export const Layout = ({ title, subTitle, children }: Props) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      <div className='flex h-full'>
        <Sidebar />
        <MainContent title={title} subTitle={subTitle}>
          {children}
        </MainContent>
      </div>
    </div>
  )
}
