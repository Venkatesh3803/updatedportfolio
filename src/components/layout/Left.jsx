import React from 'react'
import Navbar from './Navbar'

const Left = ({ active, setActive }) => {
    return (
        <div className={active ? "left active" : "left"}>
            <Navbar active={active} setActive={setActive} />
        </div>
    )
}

export default Left