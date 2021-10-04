import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Header, Footer} from './components'
import { About, Category, Frontpage, Item, ManageItems} from './pages'
import './App.css'
import db from './config/fbConfig'
import { CategoryContext, ItemsContext, SlideContext } from './contexts'
const App = () => {
        
    const [ItemsList, setItemsList] = useState([]);
    const [SlideList, setSlideList] = useState([]);
    const [CategoryList, setCategoryList] = useState([]);
    // gets items from database and puts them in state
    const getCollection=async (name, setFunc)=>{
        const querySnapshot = await db.collection(name).get();
        const collection = querySnapshot.docs.map(doc=>{return {...doc.data(), id:doc.id};});
        setFunc(collection);
    }

  
    
    // calls getItems
    useEffect( ()=>{
        getCollection('items', setItemsList);
        getCollection('slides', setSlideList);
        getCollection('categories', setCategoryList)
    }, [])
    
    return (
        <Router>
            <div>
            <ItemsContext.Provider value={{ItemsList, setItemsList, getCollection}}>
            <SlideContext.Provider value={{SlideList, setSlideList, getCollection}}>
            <CategoryContext.Provider value={{CategoryList, setCategoryList, getCollection}}>
                <Header/>
                
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/manage">
                            <ManageItems/>
                        </Route>
                        <Route path="/category/:name">
                            <Category/>
                        </Route>
                        <Route path="/item/:id">
                            <Item/>
                        </Route>
                        <Route path="/">
                            <Frontpage/>
                        </Route>
                    </Switch>
                </CategoryContext.Provider>
                </SlideContext.Provider>
                </ItemsContext.Provider>
                <Footer/>
            </div>
        </Router>
        
    )
}

export default App
