import { NewHeroBanner } from '../../Components/NewHeroBanner'
import React from 'react'

const page = () => {
  return (
    <div
    style={{
      backgroundImage:'/assets/hero/banner.jpg'
    }}
    className=' aspect-[20/9] bg-("/assets/hero/banner.jpg")'>
      <NewHeroBanner/>
    </div>
  )
}

export default page