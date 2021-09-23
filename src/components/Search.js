import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext';

function Search() {
    const [dropdown, setDropdown] = useState(false);
    const [searchText, setSearchText] = useState("");
    const {ItemsList} = useContext(ItemsContext);
    const filterItems = ()=>{
        const filteredItems = ItemsList.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase()))
        return searchText!==""?filteredItems:ItemsList;
        }
    return (
            <div className="search header-col3 dropdown" >
                   {dropdown && <div className="dropdown-content" onMouseLeave={()=>{setDropdown(false)}}
                    >
                    {filterItems().map((item)=>{
                        return <div key={item.id} className="search-item">
                            <Link to={
                                {
                                    pathname:`/item/${item.id}`,
                                    item,
                                }}
                                onClick={()=>{setDropdown(false)}}>
                                <h3>{item.name}</h3>
                                <img className="search-img" src={item.url} alt={item.name}></img>
                            </Link>
                            </div>
                    })}
                    </div>}
                
                <input type="text" id="search-field" 
                value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                onClick={()=>{setDropdown(true)}}
                placeholder="Search"/>
                
                
            </div>
    )
}



export default Search
