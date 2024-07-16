import Header from '@/components/molecules/Header'
import Movies from '@/components/organism/Movies'
import React from 'react'

function page() {
  return (
    <main className="max-w-[1440px] mx-auto flex min-h-screen flex-col ">
      <Header isActive={3}/>
      <Movies type={3} title="Upcoming"/>
    </main>
  )
}

export default page