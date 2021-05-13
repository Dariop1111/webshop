import React, { useContext } from 'react'
import { AddItem } from '../components';
import db from '../config/fbConfig';
import { ItemsContext } from '../contexts/ItemsContext'
import './ManageItems.css'

function RemoveItems() {

    const {ItemsList, getItems} = useContext(ItemsContext);

    const handleDelete = async (id)=>{
        await db.collection('items').doc(id).delete();
        getItems()
    }

    return (
        <div className="manageitems-table">
            <AddItem/>
            <div className="table-header">
                <div>Ime</div>
                <div>Opis</div>
                <div>Cijena</div>
                <div></div>
            </div>
            {ItemsList.map((item)=>{
                    return <div key={item.id} className="table-row">
                        <div>{item.name}</div>
                        <div>{item.desc}</div>
                        <div>{item.price} kn</div>
                        <div><button onClick={()=>handleDelete(item.id)}>Delete</button></div>
                        </div>
                })}
        </div>
    )
}

export default RemoveItems
