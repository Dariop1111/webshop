import React, { useContext, useState } from 'react'
import db from '../config/fbConfig';
import { CategoryContext, ItemsContext } from '../contexts';
import AddImage from './AddImage';

function AddItem() {

    const defaultItem={name:"", desc:"", price:0, category:"", url:""};
    
    
    const {getCollection, setItemsList} = useContext(ItemsContext);
    const {CategoryList} = useContext(CategoryContext);
    const [newItem, setNewItem] = useState(defaultItem);

    

    const isNewItemValid = ()=>{
        return newItem.name!==defaultItem.name && newItem.price!==defaultItem.price && newItem.category !== defaultItem.category;
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
                getCollection('items', setItemsList);
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

            <div className="add-item-categories">
                {CategoryList.map((category)=><div key={category.id}>
                    <label className="add-item-label" htmlFor={category.name}>{category.name}</label>
                    <input
                        className="add-item-input-radio"
                        name="category"
                        type="radio"
                        id={category.name}
                        value={category.name}
                        onChange={handleChange}></input>
                </div>)}
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
