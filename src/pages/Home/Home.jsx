import React from 'react'
import Banner from '../../components/HomeComponents/Banner'
import Company from '../../components/HomeComponents/Company'
import Services from '../../components/HomeComponents/Services'
import WorkingProcess from '../../components/HomeComponents/WorkingProcess'
import Contact from '../../components/HomeComponents/Contact'

export default function Home() {
  return (
    <main className="mx-5 py-10 md:container md:mx-auto">
        <Banner/>
        <Company/>
        <Services/>
        <WorkingProcess/>
        <Contact/>
    </main>
  )
}
