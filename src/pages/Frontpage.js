import React, { useContext } from 'react'
import { ItemsContext } from '../contexts/ItemsContext'

import './Frontpage.css'

function Frontpage() {

    const {ItemsList} = useContext(ItemsContext);
    return (
        <div>
            <div className="frontpage-itemlist">
                {ItemsList.map((item)=>{
                    return <div key={item.id}>
                        <h3>{item.name}</h3>
                        <img className="frontpage-img" src={item.url} alt={item.name}></img>
                        <p>{item.desc}</p>
                        <p>{item.price} kn</p>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Frontpage
