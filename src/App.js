import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Header, Footer} from './components'
import { ItemsContext } from './contexts/ItemsContext'
import { About, Frontpage, ManageItems} from './pages'
import './App.css'
import db from './config/fbConfig'

const App = () => {
        
    const [ItemsList, setItemsList] = useState([]);
    // gets items from database and puts them in state
    const getItems=async ()=> {
        const querySnapshot = await db.collection("items").get();
        const items = querySnapshot.docs.map(doc=>{return {...doc.data(), id:doc.id};
        });
        setItemsList(items);
        console.log("called Items")
    }
    // calls getItems
    useEffect( ()=>{
        
        getItems();
    }, [])
    
    return (
        <Router>
            <div>
                <Header/>
                <ItemsContext.Provider value={{ItemsList, setItemsList, getItems}}>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/manage">
                            <ManageItems/>
                        </Route>
                        <Route path="/">
                            <Frontpage/>
                        </Route>
                    </Switch>
                </ItemsContext.Provider>
                <Footer/>
            </div>
        </Router>
        
    )
}

export default App
