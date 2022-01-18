import React from 'react'
import { useSelector } from 'react-redux'

const HeaderDemo = ({ headerTitle }) => {

    const style = useSelector(state => state.style.styleData)
    return (
        <div className="text-center py-2" >
            <header style={style.header.head}>{headerTitle}</header>
        </div>
    )
}

export default HeaderDemo;
