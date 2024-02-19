import React from 'react'
import Banner from '../../components/HomeComponents/Banner'
import Company from '../../components/HomeComponents/Company'
import Services from '../../components/HomeComponents/Services'
import WorkingProcess from '../../components/HomeComponents/WorkingProcess'
import Contact from '../../components/HomeComponents/Contact'
import Testimonial from '../../components/HomeComponents/Testimonial'
import FacebookMsg from '../../components/shared/FacebookMsg/FacebookMsg'
import Record from '../../components/HomeComponents/Record'
import Projects from '../../components/HomeComponents/Projects'

export default function Home() {
  return (
    <main className="py-10">
        <Banner/>
        <Company/>
        <Services/>
        <Projects/>
        <WorkingProcess/>
        <Record/>
        <Testimonial/>
        <Contact/>
        <FacebookMsg/>
    </main>
  )
}
