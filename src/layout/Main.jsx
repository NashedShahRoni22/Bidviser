import React from 'react'
import Header from '../components/shared/Navbar/Header'
import { Outlet } from 'react-router-dom'
import Bottombar from '../components/shared/Bottombar/Bottombar'

export default function Main() {
  return (
    <section>
        <Header/>
        <Outlet/>
        <Bottombar/>
    </section>
  )
}
