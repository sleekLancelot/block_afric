import React from 'react'

import '../../css/Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="homeSect1">
                <div className="sides">
                    <h2>WALLET BALLANCE</h2>
                    <h2>TOKEN BALANCE</h2>
                    <h2>NAIRA BALANCE</h2>
                </div>
            </div>

            <div className="homeSect2">
                <p>Select Currency:</p>
                <div className="currencyBox">
                    <div className="currency">
                        <span>TOKEN</span>
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
                        <h5>DATE</h5>
                        <h5>DESCRIPTION</h5>
                        <h5>AMOUNT</h5>
                    </div>
                    <div className="act">
                        <span>1/1/21</span>
                        <span>Sent</span>
                        <span>₦100</span>
                    </div>
                    <div className="act">
                        <span>2/2/21</span>
                        <span>Received</span>
                        <span>₦200</span>
                    </div>
                    <div className="act">
                        <span>3/3/21</span>
                        <span>Sent</span>
                        <span>₦300</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
