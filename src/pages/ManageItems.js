import React, { useContext } from 'react'
import { AddItem } from '../components';
import AddSlide from '../components/AddSlide';
import db from '../config/fbConfig';
import { ItemsContext } from '../contexts/ItemsContext'
import { SlideContext } from '../contexts/SlideContext';
import './ManageItems.css'

function RemoveItems() {

    const {ItemsList, getItems} = useContext(ItemsContext);
    const {SlideList, getSlides} = useContext(SlideContext);

    const handleItemDelete = async (id)=>{
        await db.collection('items').doc(id).delete();
        getItems()
    }

    const handleSlideDelete = async (id)=>{
        await db.collection('Slides').doc(id).delete();
        getSlides()
    }

    return (
        <div className="manageitems-table box">
            <AddSlide/>
            <div>
            {SlideList.map((slide)=>{
                    return <div key={slide.id} className="table-row">
                        <img src={slide.url} alt="img" className="slide-img-preview"></img>
                        <div><button onClick={()=>handleSlideDelete(slide.id)}>Delete</button></div>
                        </div>
                })}
            </div>
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
                        <div>{item.price} kn</div>
                        <div><button onClick={()=>handleItemDelete(item.id)}>Delete</button></div>
                        </div>
                })}
        </div>
    )
}

export default RemoveItems
