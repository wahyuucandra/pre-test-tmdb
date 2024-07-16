import Header from '@/components/molecules/Header'
import Movies from '@/components/organism/Movies'
import React from 'react'

function page() {
  return (
    <main className="max-w-[1440px] mx-auto flex min-h-screen flex-col ">
      <Header isActive={4}/>
      <Movies type={4} title="Top Rated"/>
    </main>
  )
}

export default page