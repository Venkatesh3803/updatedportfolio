import React from 'react'
import Navber from './navber'

const Left = ({ active, setActive }) => {
    return (
        <div className={active ? "left active" : "left"}>
            <Navber active={active} setActive={setActive} />
        </div>
    )
}

export default Left
