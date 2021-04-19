import React from 'react'

import '../../css/Dummy.css'
import { useLocation } from 'react-router-dom'

const Dummy = () => {
    const location = useLocation()
    return (
        <div className='dummy'>
            {location.pathname}
        </div>
    )
}

export default Dummy
