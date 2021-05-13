import React, { useContext, useState } from 'react'
import db from '../config/fbConfig';
import { ItemsContext } from '../contexts/ItemsContext';
import AddImage from './AddImage';
import './AddItem.css'

function AddItem() {

    const defaultItem={name:"", desc:"", price:0, url:""};
    const {getItems} = useContext(ItemsContext);

    const [newItem, setNewItem] = useState(defaultItem);

    

    const isNewItemValid = ()=>{
        return newItem.name!==defaultItem.name && newItem.price!==defaultItem.price;
    }


    const handleChange = (e)=>{

        const target = e.target;
        const value = target.type === "checkbox"? target.checked: target.value;
        const name = target.name;

        setNewItem({ ...newItem, [name]:value});

    }

    const handleSubmit = (e)=>{
        //sends new item to db
        if(isNewItemValid()){
            db.collection("items").add(newItem)
            .then((docRef)=>{
                getItems();
                setNewItem(defaultItem);
            }).catch((err)=>{
                console.error(err);
                setNewItem(defaultItem);
            })

        }
       
        e.preventDefault()
    }
    const getUrl=(url)=>{
        setNewItem({...newItem, url});
    }

    return (
        <form className="add-item" onSubmit={handleSubmit}>
            <div>
                <label className="add-item-label" htmlFor="name">Item Name</label>
                <div><input 
                    className="add-item-input-text"
                    type="text"
                    name="name"
                    id="name" 
                    value={newItem.name}
                    onChange={handleChange}
                   ></input></div>
            </div>
            <div>
                <label className="add-item-label"htmlFor="desc">Item Description</label>
                <div><textarea 
                        className="add-item-textarea" 
                        type="textarea" 
                        name="desc" 
                        id="desc"
                        value={newItem.desc}
                        onChange={handleChange}></textarea></div>
            </div>
            <div>
                <label className="add-item-label"htmlFor="price">Item Price</label>
                <div><input className="add-item-input-text"
                    type="number" 
                    name="price" 
                    id="price" 
                    value={newItem.price}
                    onChange={handleChange}
                ></input></div>
            </div>

            <AddImage getUrl={getUrl}/>
            
            
            <div><input className="add-item-input-submit "type="submit"></input></div>
            
        </form>
    )
}

export default AddItem
