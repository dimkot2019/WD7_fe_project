import React from 'react';
import {SERVER_IMAGES} from '../../utils/constants'

function OneProduct (props) {
    const { available, img_id, id, price, title, img_url } = props

    return (
        <div>
            <div className="single-products-catagory clearfix" style = {{position: 'absolute', left: `${available}%`, top: `${img_id}px`}}>
                                <img src={`${SERVER_IMAGES}${img_url}`} alt=""/>
                                <div className="hover-content">
                                    <div className="line"></div>
                                    <p>From ${price}</p>
                                    <h4>{title}</h4>
                                </div>
            </div>
        </div>
    )
}

export default React.memo(OneProduct);