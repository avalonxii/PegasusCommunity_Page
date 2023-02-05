import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Timer from './Timer'
import GimmeGimme from './GimmeGimme'
import './header.css'

export default function header() {
    return (
        <div className="header">
            <div className="contenedor menu">
                <Title />
                <Navbar />
            </div>
            <div className="contenedor slider">
                <Timer />
                <GimmeGimme />
            </div>
        </div>
    )
}
