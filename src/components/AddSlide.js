import React, { useContext, useState } from 'react'
import db from '../config/fbConfig';
import { SlideContext } from '../contexts/SlideContext';
import AddImage from './AddImage';

function AddSlide() {

    const defaultSlide={url:""};
    const {getCollection, setSlideList} = useContext(SlideContext);

    const [newSlide, setNewSlide] = useState(defaultSlide);

    




    const handleSubmit = (e)=>{
        //sends new Slide to db
            db.collection("slides").add(newSlide)
            .then((docRef)=>{
                getCollection('slides', setSlideList);
                setNewSlide(defaultSlide);
            }).catch((err)=>{
                console.error(err);
                setNewSlide(defaultSlide);
            })
       
        e.preventDefault()
    }
    const getUrl=(url)=>{
        setNewSlide({...newSlide, url});
    }

    return (
        <form className="add-Slide" onSubmit={handleSubmit}>
            
            <AddImage getUrl={getUrl}/>
            
            
            <div><input className="add-Slide-input-submit "type="submit"></input></div>
            
        </form>
    )
}

export default AddSlide
