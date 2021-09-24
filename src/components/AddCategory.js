import React, { useContext, useState } from 'react'
import db from '../config/fbConfig';
import { CategoryContext } from '../contexts';
import './managerPage.css'

function AddCategory() {

    const defaultCategory={name:""};
    const {getCollection, setCategoryList} = useContext(CategoryContext);

    const [newCategory, setNewCategory] = useState(defaultCategory);

    

    const isNewCategoryValid = ()=>{
        return newCategory.name!==defaultCategory.name;
    }


    const handleChange = (e)=>{

        const target = e.target;
        const value = target.type === "checkbox"? target.checked: target.value;
        const name = target.name;

        setNewCategory({ ...newCategory, [name]:value});

    }

    const handleSubmit = (e)=>{
        //sends new Category to db
        if(isNewCategoryValid()){
            db.collection("categories").add(newCategory)
            .then((docRef)=>{
                getCollection('categories', setCategoryList);
                setNewCategory(defaultCategory);
            }).catch((err)=>{
                console.error(err);
                setNewCategory(defaultCategory);
            })

        }
       
        e.preventDefault()
    }

    return (
        <form className="add-Category" onSubmit={handleSubmit}>
            <div>
                <label className="add-Category-label" htmlFor="name">Category Name</label>
                <div><input 
                    className="add-Category-input-text"
                    type="text"
                    name="name"
                    id="name" 
                    value={newCategory.name}
                    onChange={handleChange}
                   ></input></div>
            </div>
            
            
            <div><input className="add-Category-input-submit "type="submit"></input></div>
            
        </form>
    )
}

export default AddCategory
