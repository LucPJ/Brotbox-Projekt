import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

export default function Homepage(){

    return(
        <>
        <Navigation/>
        
        <h1>Brotzeitbox</h1>
        <p>hier die beschreibung</p>
        <Outlet/>
        </>
    )
}