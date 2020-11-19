import React,{useRef} from 'react';
import OneItem from '../components/catalogelement/oneItem'
import { useSelector,useDispatch } from 'react-redux';
import { CatalogFilter } from '../components/filter/index'
import * as dayjs from 'dayjs';
import {updateCatalogList} from '../store/action_creatores';

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
    let selectRef1 = useRef('');
    let selectRef2 = useRef('');
    

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

    if (props.match.params.categoryName) {
        finalCatalog = catalogList.filter(filterCategory)
    }
    if (ColorID) {
        finalCatalog = finalCatalog.filter(filterColor)  
    }
     

    function handleChangeSortBySelectRef (e) {
        selectRef1.current = e.target.options[e.target.selectedIndex].label;
        if (selectRef1.current==='по возрастанию') {
            finalCatalog = catalogList.sort(function(a, b){return dayjs(a.dt_in).unix() - dayjs(b.dt_in).unix() ;});
        }
        if (selectRef1.current==='по убыванию') {   
            finalCatalog = catalogList.sort(function(a, b){return dayjs(b.dt_in).unix() - dayjs(a.dt_in).unix() ;});   
        }
        dispatch(updateCatalogList(finalCatalog));
    }
    
    function handleChangeViewSelectRef (e) {
        selectRef2.current = e.target.options[e.target.selectedIndex].label;
        
        switch (selectRef2.current) {
            case '10':
                finalCatalog = catalogList.slice(0, 10);
                break;
            case '20':
                finalCatalog = catalogList.slice(0, 20);
                break;
            case '30':
                finalCatalog = catalogList.slice(0, 30);
                break;
            case '40':
                finalCatalog = catalogList.slice(0, 40);
                break;
            default:
                finalCatalog = catalogList;
        } 
        // dispatch(updateCatalogList(finalCatalog));    
    }

    function handleClickPage_2(e) {
        if (selectRef2.current==='10') {
            finalCatalog = catalogList.slice(10, 20);
        }
        if (selectRef2.current==='20') {
            finalCatalog = catalogList.slice(20, 40);
        }
        if (selectRef2.current==='30') {
            finalCatalog = catalogList.slice(30, 60);
        }
        if (selectRef2.current==='40') {
            finalCatalog = catalogList.slice(40, 80);
        }
        // dispatch(updateCatalogList(finalCatalog));    
    }
    function handleClickPage_3(e) {
        if (selectRef2.current==='10') {
            finalCatalog = catalogList.slice(20, 30);
        }
        if (selectRef2.current==='20') {
            finalCatalog = catalogList.slice(40, 60);
        }
        if (selectRef2.current==='30') {
            finalCatalog = catalogList.slice(60, 90);
        }
        if (selectRef2.current==='40') {
            finalCatalog = catalogList.slice(80, 120);
        }
        // dispatch(updateCatalogList(finalCatalog));    
    }
    function handleClickPage_4(e) {
        if (selectRef2.current==='10') {
            finalCatalog = catalogList.slice(30, 40);
        }
        if (selectRef2.current==='20') {
            finalCatalog = catalogList.slice(60, 80);
        }
        if (selectRef2.current==='30') {
            finalCatalog = catalogList.slice(90, 120);
        }
        if (selectRef2.current==='40') {
            finalCatalog = catalogList.slice(120, 160);
        }
        // dispatch(updateCatalogList(finalCatalog));    
    }
    
   
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
                                    <p>Sort by</p>
                                    <form action="#" method="get">
                                        <select name="select" id="sortBydate"  onChange={handleChangeSortBySelectRef}>
                                            <option value="value">date</option>
                                            <option value="value">по возрастанию</option>
                                            <option value="value">по убыванию</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="view-product d-flex align-items-center">
                                    <p>View by</p>
                                    <form action="#" method="get">
                                        <select name="select" id="viewProduct" onChange={handleChangeViewSelectRef}>
                                            <option value="value">quantity</option>
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
                        finalCatalog.map((item)=> <OneItem 
                            key={item.id} 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            img_url={item.img_url}
                            dt_in={item.dt_in}
                        /> )
                    }

                {/* <div className="row"> */}
                    <div className="col-12">
                        <nav aria-label="navigation">
                            <ul className="pagination justify-content-end mt-50">
                                <li className="page-item "><a className="page-link active">01.</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={handleClickPage_2}>02.</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={handleClickPage_3}>03.</a></li>
                                <li className="page-item"><a className="page-link" href="#" onClick={handleClickPage_4}>04.</a></li>
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