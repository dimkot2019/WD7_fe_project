import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {CATALOG} from '../../router/url';

export function CategoryFilter () {

    const dataList = useSelector((store)=>{
        return store.app.categoryList;});
    

    const dispatch = useDispatch();
    function renderList (item) {
        return (
        <li key={item.id}><Link to={`${CATALOG}/${item.url}`}>{item.title}</Link></li>
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
                    <li><Link to={`${CATALOG}`}>ВСЕ</Link></li>
                </ul>
            </div>
        </div>
    )
}