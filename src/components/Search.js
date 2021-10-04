import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CategoryContext, ItemsContext } from '../contexts';

function Search() {
    const [dropdown, setDropdown] = useState(false);
    const [searchText, setSearchText] = useState("");
    const {ItemsList} = useContext(ItemsContext);
    const {CategoryList} = useContext(CategoryContext);

    const filterItems = ()=>{
        const filteredItems = ItemsList.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase()))
        return searchText!==""?filteredItems:[];
        }
    return (
            <div className="search header-col3 dropdown" >
                   {dropdown && <div className="dropdown-content" onMouseLeave={()=>{setDropdown(false)}}
                    >
                    {searchText!==""?filterItems().map((item)=>{
                        return <div key={item.id} className="search-item">
                            <Link to={
                                {
                                    pathname:`/item/${item.id}`,
                                }}onClick={()=>{
                                    localStorage.setItem("item", JSON.stringify(item));
                                    setDropdown(false)
                                }}>
                                <h3>{item.name}</h3>
                                <img className="search-img" src={item.url} alt={item.name}></img>
                            </Link>
                            </div>
                    }):CategoryList.map((category)=>
                        <div key={category.id} className="search-category">
                            <Link to={{
                                pathname:`/category/${category.name}`,
                            }}  onClick={()=>{
                                localStorage.setItem("category", JSON.stringify(category));
                            }}>
                            <h3>{category.name}</h3>
                            </Link>
                        </div>
                    )}
                    
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
