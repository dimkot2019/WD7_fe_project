import React from 'react';
import OneItem from '../components/catalogelement/oneItem'
import { useSelector,useDispatch } from 'react-redux';
import { CatalogFilter } from '../components/filter/index'

function CatalogPage(props) {
    const catalogList = useSelector((store)=> store.app.catalogList);
    return (
        <>
        <CatalogFilter/>
        <div className="amado_product_area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    {
                        catalogList.map((item)=> <OneItem  
                            id = {item.id}
                            title = {item.title}
                            price = {item.price}
                            img_url = {item.img_url}
                        /> )
                    }
                </div>
            </div>
        </div>
        </>
    );
}

export default CatalogPage;