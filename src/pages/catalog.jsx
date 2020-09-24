import React from 'react';
import OneItem from '../components/catalogelement/oneItem'
import { useSelector,useDispatch } from 'react-redux';

function CatalogPage(props) {
    const catalogList = useSelector((store)=> store.app.catalogList);
    return (
        <div>
            {
        catalogList.map((item)=> <OneItem  
        id = {item.id}
        title = {item.title}
        price = {item.price}
        img_url = {item.img_url}
        /> )
           }
        </div>
    );
}

export default CatalogPage;