import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext'

import './Frontpage.css'

function Frontpage() {

    const {ItemsList} = useContext(ItemsContext);
    return (
        <div className="box">
            <div className="frontpage-itemlist ">
                {ItemsList.map((item)=>{
                    return <div key={item.id} className="frontpage-item">
                        <Link to={
                            {
                                pathname:`/item/${item.id}`,
                                item,
                            }
                        }>
                            <h3>{item.name}</h3>
                            <img className="frontpage-img" src={item.url} alt={item.name}></img>
                        </Link>
                        <p>{item.price} kn</p>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Frontpage
