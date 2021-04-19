import React from 'react'

import '../../css/Home.css'

import hiv from '../assets/LogoMakr-7pHYX8.png'
import xray from '../assets/Radiology.png'
import bp from '../assets/bpcheck.jpg'

const Home = () => {
    return (
        <div className='home'>
            <div className="homeSect1">
                <div className="sides">
                    <div className="side bal">
                        <h2>AFYA</h2>
                        <p>143.00</p>
                        <span>Balance</span>
                    </div>
                    <div className="arrow">
                        <i className="fas fa-equals"></i>
                    </div>
                    <div className="side eqv">
                        <h2>ZAR</h2>
                        <p>R21.00</p>
                        <span>Equivalent</span>
                    </div>
                </div>
            </div>

            <div className="homeSect2">
                <p>Select Currency:</p>
                <div className="currencyBox">
                    <div className="currency">
                        <select>
                            <option>AFYA</option>
                            <option>ZAR</option>
                        </select>
                        <input type="text" placeholder='0.00000001' />
                    </div>

                    <div className="btnBox">
                        <button className="btn">SEND</button>
                        <button className="btn">RECEIVE</button>
                    </div>
                </div>
            </div>

            <div className="homeSect3">
                <p>Recent Activity</p>
                <div className="activities">
                    <div className="act">
                        <img src={hiv} alt="HIV test" width='45px' height='45px' />
                        <span>HIV Blood Draw Test</span>
                        <span>A100</span>
                    </div>
                    <div className="act">
                        <img src={xray} alt="x-ray" width='45px' height='45px' />
                        <span>TB Radiology Xray</span>
                        <span>A30</span>
                    </div>
                    <div className="act">
                        <img src={bp} alt="BP check" width='45px' height='45px' />
                        <span>Blood pressure check</span>
                        <span>A10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
