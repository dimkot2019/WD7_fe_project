import React from 'react';
import OneItem from '../components/catalogelement/oneItem'
import { useSelector,useDispatch } from 'react-redux';
import { CatalogFilter } from '../components/filter/index'
import * as dayjs from 'dayjs';
import {changePageNumber} from '../store/action_creatores';
import {changeElementsOnPage} from '../store/action_creatores';
import {changeSortOrder} from '../store/action_creatores';

function getCategoryID (categoryName,categoryList) {
    let res = '';
    categoryList.forEach((item) => {
        if (item.url === categoryName) {
            res = item.id;
        };}
    )
    return res;
}

function CatalogPage(props) {

    let dispatch = useDispatch();
    
    let {sortOrder, elementsOnPage, pageNumber} = useSelector((store)=> store.app.catalogInfo);

    const catalogList = useSelector((store)=> store.app.catalogList);

    const filter = useSelector((store)=> store.app.filter);
    
    const categoryList = useSelector((store)=> store.app.categoryList);

    const CategoryID = getCategoryID (props.match.params.categoryName,categoryList);
    
    const ColorID = filter.color;  
    
    
    function filterCategory (item) {
        return CategoryID === item.category;
    }

    function filterColor (item) {
        return ColorID === item.colors;
    }

    let finalCatalog = catalogList;
    if (sortOrder === 'убыв') {
        finalCatalog = catalogList.sort(function(a, b){return dayjs(b.dt_in).unix() - dayjs(a.dt_in).unix() ;});
    }
    if (sortOrder === 'возр') {   
        finalCatalog = catalogList.sort(function(a, b){return dayjs(a.dt_in).unix() - dayjs(b.dt_in).unix() ;});  
    } 
    

    if (props.match.params.categoryName) {
        finalCatalog = catalogList.filter(filterCategory)
    }
    if (ColorID) {
        finalCatalog = finalCatalog.filter(filterColor)  
    }


    function handleSortOrder () {
        if (sortOrder !== 'убыв') {
            dispatch(changeSortOrder('убыв'));
        }
        if (sortOrder !== 'возр') {    
            dispatch(changeSortOrder('возр'));
        }     
    }


    function handleElementsOnPage (SyntheticEvent) {
        const elementsOnPage = SyntheticEvent.currentTarget.options[SyntheticEvent.currentTarget.selectedIndex].label;
        dispatch(changeElementsOnPage(elementsOnPage));
        console.log('elementsOnPage',elementsOnPage);
    }


    function handleViewPage01 () {
        dispatch(changePageNumber(0));
    }

    function handleViewPage02 () {
        dispatch(changePageNumber(1));
    }
    
    function handleViewPage03 () {
        dispatch(changePageNumber(2));
    }

    function handleViewPage04 () {
        dispatch(changePageNumber(3));
        
    }

    const startIndex = pageNumber * elementsOnPage;
    const endIndex = startIndex + Number(elementsOnPage);
    const list = finalCatalog.slice(startIndex, endIndex);
    
    
    return (
        <>
        <CatalogFilter/>  
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
                                    <p>Sort by date</p>
                                    <form action="#" method="get">
                                        <select name="select" id="sortBydate"  onChange={handleSortOrder}>
                                            <option value="value">возр</option>
                                            <option value="value">убыв</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="view-product d-flex align-items-center">
                                    <p>View by</p>
                                    <form action="#" method="get">
                                        <select name="select" id="viewProduct" onChange={handleElementsOnPage}>
                                            <option value="value">10</option>
                                            <option value="value">20</option>
                                            <option value="value">30</option>
                                            <option value="value">40</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                     </div>

                    {
                        list.map((item)=> <OneItem 
                            key={item.id} 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            img_url={item.img_url}
                            dt_in={item.dt_in}
                        /> )
                    }

                    <div className="col-12">
                        <nav aria-label="navigation">
                            <ul className="pagination justify-content-end mt-50">
                                <li className="page-item "><a className="page-link active" onClick={handleViewPage01}>01.</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={handleViewPage02}>02.</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={handleViewPage03}>03.</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={handleViewPage04}>04.</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CatalogPage;