import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Slide } from '../components';
import { CategoryContext } from '../contexts';


function Frontpage() {

    const {CategoryList} = useContext(CategoryContext)
    return (
        <div className="box frontpage-wrap">
            <Slide/>
            <div className="frontpage-categories">
                {CategoryList.map((category)=>
                <div key={category.id} className="frontpage-category">
                    <Link to={{
                        pathname:`/category/${category.name}`,
                    }} onClick={()=>{
                        localStorage.setItem("category", JSON.stringify(category));
                    }}>
                    {category.name}
                    </Link>
                </div>)}
            </div>
            
        </div>
    )
}

export default Frontpage
