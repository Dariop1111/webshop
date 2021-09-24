import React, { useContext } from 'react'
import { AddCategory, AddItem, AddSlide } from '../components';
import db from '../config/fbConfig';
import { CategoryContext, ItemsContext, SlideContext } from '../contexts';

function RemoveItems() {

    const {ItemsList, setItemsList, getCollection} = useContext(ItemsContext);
    const {SlideList, setSlideList} = useContext(SlideContext);
    const {CategoryList, setCategoryList} = useContext(CategoryContext);

    const handleDelete = async (id, name, setFunc)=>{
        await db.collection(name).doc(id).delete();
        getCollection(name, setFunc);
    }

    return (
        <div className="manageitems-table box">
            <AddCategory/>
            <div>
            {CategoryList.map((category)=>{
                    return <div key={category.id} className="table-row">
                        <div>{category.name}</div>
                        <div><button onClick={()=>handleDelete(category.id, 'categories', setCategoryList)}>Delete</button></div>
                        </div>
                })}
            </div>
            <AddSlide/>
            <div>
            {SlideList.map((slide)=>{
                    return <div key={slide.id} className="table-row">
                        <img src={slide.url} alt="img" className="slide-img-preview"></img>
                        <div><button onClick={()=>handleDelete(slide.id, 'slides', setSlideList)}>Delete</button></div>
                        </div>
                })}
            </div>
            <AddItem/>
            <div className="table-header">
                <div>Ime</div>
                <div>Opis</div>
                <div>Cijena</div>
                <div>Kategorija</div>
            </div>
            {ItemsList.map((item)=>{
                    return <div key={item.id} className="table-row">
                        <div>{item.name}</div>
                        <div>{item.price} kn</div>
                        <div>{item.category}</div>
                        <div><button onClick={()=>handleDelete(item.id, 'items', setItemsList)}>Delete</button></div>
                        </div>
                })}
        </div>
    )
}

export default RemoveItems
