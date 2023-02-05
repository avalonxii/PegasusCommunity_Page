import React from 'react'
import blob1 from '../../assets/img/vector.png'

export default function Blob() {
    return (
        <div className="blob">

            <img src={blob1} alt=""  className='b1'/>

            {/* <svg
                width="751"
                height="747"
                viewBox="0 0 751 747"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='b1'
            >
                <g filter="url(#filter0_d_88_89)">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M486.421 157.055C555.887 164.14 623.475 205.193 642.975 287.319C661.057 363.474 615.364 432.589 562.806 478.763C511.705 523.656 448.566 543.99 393.75 506.269C305.753 445.714 191.009 362.131 222.249 244.409C253.469 126.759 385.941 146.807 486.421 157.055Z"
                        fill="url(#paint0_linear_88_89)"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_88_89"
                        x="0"
                        y="-64"
                        width="864"
                        height="811"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="108.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.8375 0 0 0 0 0.108177 0 0 0 0 0.818958 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_88_89"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_88_89"
                            result="shape"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_88_89"
                        x1="257.34"
                        y1="248.909"
                        x2="561.076"
                        y2="622.479"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#644DB5" />
                        <stop offset="1" stop-color="#D45EFF" />
                    </linearGradient>
                </defs>
            </svg> */}
        </div>
    )
}
