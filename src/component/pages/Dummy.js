import React from 'react'

import '../../css/Dummy.css'
import { useLocation } from 'react-router-dom'

const Dummy = () => {
    const location = useLocation()

    let menuName = location.pathname.slice(1, location.pathname.length)

    return (
        <div className='dummy'>
            <p>
                {`${menuName} page`}
            </p>
        </div>
    )
}

export default Dummy
