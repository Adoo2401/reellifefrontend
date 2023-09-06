import type { ReactElement } from 'react'


import type { NextPageWithLayout } from '../_app'
import DashboardLayout from '@/components/dashboard/Layout'
import Instances from '@/components/dashboard/home/Instances'
import Overview from '@/components/dashboard/home/Overview'
import Performance from '@/components/dashboard/home/Performance'
import StoryGroup from '@/components/dashboard/home/StoryGroup'
import Stories from '@/components/dashboard/home/Stories'

 
const Page: NextPageWithLayout = () => {
  return (
    <div className='py-4 px-10'>
       <Instances/>
       <Overview/>
       <Performance/>
       <StoryGroup/>
       <Stories/>
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