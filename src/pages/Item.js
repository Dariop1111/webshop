import React from 'react'
import { useLocation } from 'react-router'
import './Item.css'

function Item() {

    const {item} = useLocation();
    return (
        <div className="itempage box">
            <div className="itempage-col1">
                <h3>{item.name}</h3>
                <img className="itempage-img" src={item.url} alt={item.name}></img>
            </div>
            <div className="itempage-col2">    
                <p>{item.desc}</p>
                <p>{item.price} kn</p>
            </div>
        </div>
    )
}

export default Item
