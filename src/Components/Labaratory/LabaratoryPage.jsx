import React from 'react'
import LabaratoryHeader from './LabaratoryHeader'
import { Outlet } from 'react-router-dom'

function LabaratoryPage() {
    return (
        <main>
            <LabaratoryHeader />
            <Outlet />
        </main>
    )
}

export default LabaratoryPage