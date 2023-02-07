import React from 'react'
import Navbar from './Navbar'
import Title from './Title'
import ContenedorTimer from './ContenedorTimer'
import './header.css'
import './timer.css'
import Slider from './Slider'

export default function header() {
    return (
        <div className="header">
            <div className="contenedor menu">
                <Title />
                <Navbar />
            </div>
            <div className="slider">
                <ContenedorTimer />
                <Slider/>
            </div>
        </div>
    )
}
