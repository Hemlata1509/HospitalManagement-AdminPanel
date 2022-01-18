import React from 'react';
import { useSelector } from 'react-redux';
import { BsPencilFill, BsFillEraserFill } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai'
import { TiDelete } from 'react-icons/ti';
import { IoIosColorPalette } from 'react-icons/io';
import HeaderDemo from './headerDemo';

const DrawingBoard = () => {
    const headerStyle = useSelector(state => state.style.styleData)

    return (
        <div>
            <div style={headerStyle.headerDivStyle} >
                <HeaderDemo headerTitle="DRAWING BOARD" />
            </div>
            <div className="row" style={{ marginTop: '400px' }}>
                <BsPencilFill className="col-2" style={{ fontSize: '40px' }} />
                <BsFillEraserFill className="col-2" style={{ fontSize: '40px' }} />
                <div className="col-2" style={{ display: 'flex', fontSize: '40px' }}>
                    <BsPencilFill style={{ fontSize: '40px' }} />
                    <AiOutlinePlus style={{ fontSize: '30px' }} />
                </div>
                <div className="col-2" style={{ display: 'flex', fontSize: '40px' }}>
                    <BsPencilFill style={{ fontSize: '40px' }} />
                    <AiOutlinePlus style={{ fontSize: '30px' }} />
                </div>
                <TiDelete className="col-2" style={{ fontSize: '50px' }} />
                <IoIosColorPalette className="col-2" style={{ fontSize: '50px' }} />
            </div>
        </div>
    )
}

export default DrawingBoard
