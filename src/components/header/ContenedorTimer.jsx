import React from 'react'
import Timer from './Timer'

export default function ContenedorTimer() {
    return (
        <div className="contenedorTimer">
            <svg
                id="eX63nYRhSF11"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1400 800"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
            >
                <path
                    d="M0,0v800l895.706203,1.565991-302.236254-400L823.670616,59.04902L1399.999997,0L0,0Z"
                    transform="translate(-1.56599-3.131982)"
                    fill="#2f2e2e"
                    stroke="#5535be"
                    strokeWidth="2.8"
                />
            </svg>

            <Timer />
        </div>
    )
}
