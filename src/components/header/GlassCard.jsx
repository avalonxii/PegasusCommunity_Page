import React from 'react'
import Tilt from 'react-parallax-tilt'
import pegasusImg from '../../assets/img/pegasusImg.png'

export default function GlassCard() {
    return (
        <Tilt
            className="glassCard"
            perspective={500}
            glareEnable={false}
            tiltReverse={true}
        >
            <div className='blur'></div>
            <img src={pegasusImg} alt="Pegasus Logo" />
        </Tilt>
    )
}
