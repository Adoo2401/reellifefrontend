import dynamic from 'next/dynamic';
import DashboardLayout from '@/components/dashboard/Layout'

const StudioCreator = dynamic(() => import('@/components/dashboard/studioCreator/StudioCreator'), {
  ssr: false,
});
import React from 'react'

const studio_creator = () => {
  return (
    <StudioCreator/>
  )
}

export default studio_creator