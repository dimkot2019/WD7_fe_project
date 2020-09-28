import React from 'react'
import {useSelector} from "react-redux";

export function CategoryFilter () {
    const dataList = useSelector(
        (store)=>{
            return store.app.categoryList;
        }
    );

    function renderList (item) {
        return (
        <li key={item.id}><a href={item.url}>{item.title}</a></li>
        )
    }

    return (
        <div className="widget catagory mb-50">
            <h6 className="widget-title mb-30">Catagories</h6>
            <div className="catagories-menu">
                <ul>
                    {
                        dataList.map(renderList)
                    }
                </ul>
            </div>
        </div>
    )
}