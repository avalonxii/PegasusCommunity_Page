import { easeOut, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [onHover, setOnHover] = useState('')

    return (
        <ul className="text-regular-Alata">
            <li>
                <Link to={'/'} className="lnk text-light">
                    Staff
                </Link>
                <span className='barra neon-blue'></span>
            </li>

            <li>
                <Link to={'/'} className="lnk text-light">
                    Blog
                </Link>
                <span className='barra neon-yellow'></span>
            </li>

            <li>
                <Link to={'/'} className="lnk text-light">
                    Cosplay
                </Link>
                <span className='barra neon-green'></span>
            </li>

            <li>
                <Link to={'/'} className="lnk text-light">
                    Dance
                </Link>
                <span className='barra neon-pink'></span>
            </li>

            <li>
                <Link to={'/'} className="lnk text-light">
                    Gaming
                </Link>
                <span className='barra neon-cian'></span>
            </li>

            <li>
                <Link to={'/'} className="lnk text-light">
                    Contact Us
                </Link>
                <span className='barra neon-orange'></span>
            </li>
        </ul>
    )
}
