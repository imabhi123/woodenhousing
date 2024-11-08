import BannerBlog from '@/components/blogs/BannerBlog'
import TableOfContents from '@/components/blogs/TableOfContents'
import WoodArticle from '@/components/blogs/WoodArticle'
import WoodenHouseArticle from '@/components/blogs/WoodenHouseArticle'
import React from 'react'

const page = () => {
  return (
    <div>
        <BannerBlog/>
        <div className='mx-[5%] md:mx-[15%] py-8'>
        <TableOfContents/>
        <WoodenHouseArticle/>
        <WoodArticle/>
        <WoodenHouseArticle/>
        </div>
    </div>
  )
}

export default page