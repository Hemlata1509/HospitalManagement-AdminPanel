import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillCartPlusFill } from 'react-icons/bs'
import HeaderDemo from './headerDemo';

const OrderOnline = () => {
    const headerStyle = useSelector(state => state.style.styleData)
    const orderOnlineStyle = useSelector(state => state.style.styleData.orderOnline)

    return (
        <div>
            <div style={headerStyle.headerDivStyle} >
                <HeaderDemo headerTitle="ORDER ONLINE" />
            </div>
            <div>
                <BsFillCartPlusFill style={orderOnlineStyle.img} />
            </div>
        </div>
    )
}

export default OrderOnline
