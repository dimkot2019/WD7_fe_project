import React from 'react';
import OneItem from '../components/catalogelement/oneItem'
import { useSelector,useDispatch } from 'react-redux';
import { CatalogFilter } from '../components/filter/index'
import {Sort} from '../components/filter/bySort';
import {Link} from 'react-router-dom';
import {CATALOG} from '../router/url';

function getCategoryID (categoryName,categoryList) {
    let res = '';
    categoryList.forEach((item) => {
        if (item.url == categoryName) {res = item.id;};}
    )
    return res;
}

function CatalogPage(props) {
    
    const catalogList = useSelector((store)=> store.app.catalogList);
    const filter = useSelector((store)=> store.app.filter);
    
    const categoryList = useSelector((store)=> store.app.categoryList);
    console.log('PROPS ->',props);
    
    const CategoryID = getCategoryID (props.match.params.categoryName,categoryList);

    const ColorID = filter.color;
    console.log('CategoryID',CategoryID);

        
   function filterCategory (item) {
      return CategoryID === item.category;
    }

    function filterColor (item) {
        return ColorID === item.colors;
      }

    let finalCatalog = catalogList;
    if (props.match.params.categoryName) {
        finalCatalog = catalogList.filter(filterCategory)
    }
    if (ColorID) {
        finalCatalog = finalCatalog.filter(filterColor)
    }

    
    const select = document.querySelector('#sortBydate').getElementsByTagName('option');

    

    return (
        <>
        <CatalogFilter/>  {/* ==> filter/index.js */}
        <div className="amado_product_area section-padding-100">
            <div className="container-fluid">
                <div className="row">



                <div className="col-12">
                        <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                            <div className="total-products">
                                <p>Showing 1-8 0f 25</p>
                                <div className="view d-flex">
                                    <a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="product-sorting d-flex">
                                <div className="sort-by-date d-flex align-items-center mr-15">
                                    <p>Sort by</p>
                                    <form action="#" method="get">
                                        <select name="select" id="sortBydate">
                                            <option value="value">Date</option>
                                            <option value="value">по возрастанию</option>
                                            <option value="value">по убыванию</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="view-product d-flex align-items-center">
                                    <p>View</p>
                                    <form action="#" method="get">
                                        <select name="select" id="viewProduct">
                                            <option value="value">12</option>
                                            <option value="value">24</option>
                                            <option value="value">48</option>
                                            <option value="value">96</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                     </div>
                        
                    
                     
                    {
                        finalCatalog.map((item)=> <OneItem  
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