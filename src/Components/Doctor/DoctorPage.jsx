import React from 'react'
import DoctorHeader from './DoctorHeader'
import { Outlet } from 'react-router-dom'

function DoctorPage() {
  return (
    <section className='doctor_page'>
        <DoctorHeader/>
        <Outlet/>
    </section>
  )
}

export default DoctorPage