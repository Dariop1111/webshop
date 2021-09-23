import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Header, Footer} from './components'
import { ItemsContext } from './contexts/ItemsContext'
import { About, Frontpage, Item, ManageItems} from './pages'
import './App.css'
import db from './config/fbConfig'
import { SlideContext } from './contexts/SlideContext'

const App = () => {
        
    const [ItemsList, setItemsList] = useState([]);
    const [SlideList, setSlideList] = useState([]);
    // gets items from database and puts them in state
    const getItems=async ()=> {
        const querySnapshot = await db.collection("items").get();
        const items = querySnapshot.docs.map(doc=>{return {...doc.data(), id:doc.id};
        });
        setItemsList(items);
    }

    const getSlides=async ()=>{
        const querySnapshot = await db.collection("Slides").get();
        const slides = querySnapshot.docs.map(doc=>{return {...doc.data(), id:doc.id};
        });
        setSlideList(slides);
    }
    // calls getItems
    useEffect( ()=>{
        
        getItems();
        getSlides();
    }, [])
    
    return (
        <Router>
            <div>
            <ItemsContext.Provider value={{ItemsList, setItemsList, getItems}}>
            <SlideContext.Provider value={{SlideList, setSlideList, getSlides}}>
                <Header/>
                
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/manage">
                            <ManageItems/>
                        </Route>
                        <Route path="/item/:id">
                            <Item/>
                        </Route>
                        <Route path="/">
                            <Frontpage/>
                        </Route>
                    </Switch>
                </SlideContext.Provider>
                </ItemsContext.Provider>
                <Footer/>
            </div>
        </Router>
        
    )
}

export default App
