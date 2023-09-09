import type { ReactElement } from 'react'

import type { NextPageWithLayout } from '../_app'
import DashboardLayout from '@/components/dashboard/Layout'
import {Button} from 'antd'
import StoryPage from '@/components/dashboard/stories/StoryPage'
 
const Page: NextPageWithLayout = () => {
  return (
    <div className='md:py-4 md:px-10'>
      <StoryPage/>
    </div>
  )
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}
 
export default Page