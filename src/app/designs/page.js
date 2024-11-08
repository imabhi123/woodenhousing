import Banner from '@/components/design/Banner'
import PropertyListing from '@/components/design/PropertyListing'
import Navigation from '@/components/Navigation'
import React from 'react'

const page = () => {
  return (
    <div>
        <Banner/>
        <div className='mb-6'>
            <PropertyListing/>
            <PropertyListing/>
            <PropertyListing/>
            <Navigation/>
        </div>
        
    </div>
  )
}

export default page