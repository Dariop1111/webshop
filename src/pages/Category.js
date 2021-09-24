import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ItemsContext } from '../contexts';
import './category.css'


function Category() {

    const {ItemsList} = useContext(ItemsContext);
    const {category} = useLocation()
    
    return (
        <div className="category-itemlist box">
                {ItemsList.map((item)=>{
                    return (item.category === category.name && <div key={item.id} className="category-item">
                        <Link to={
                            {
                                pathname:`/item/${item.id}`,
                                item,
                            }
                        }>
                            <h3>{item.name}</h3>
                            <img className="category-img" src={item.url} alt={item.name}></img>
                        </Link>
                    <p>{item.price} kn</p>
                    </div>)
                })}
            </div>
    )
}

export default Category
