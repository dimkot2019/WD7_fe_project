import React from 'react';
import { useSelector } from 'react-redux';
import OneProduct from '../components/catalogelement/oneProduct'

function RootPage (props) {
    const beforeCatalogList = useSelector((store)=> store.app.catalogList);

    function randomArr(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    }
    let cgList = randomArr(beforeCatalogList);
    let i = 0;

    function filterId(item) {
        const left = ['0','50','0','50','0','50','0','50'];
        const top = ['0','0','425','425','840','840','1260','1260'];
        item.available = `${left[i]}`;
        item.img_id = `${top[i]}`;
        i++;
        if (i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 ) {
            return item;
        }
        return false;  
    }
        
    let homeCatalog = cgList.filter(filterId);

    return (
                <div className="products-catagories-area clearfix">
                    <div className="amado-pro-catagory clearfix" style={{position: 'relative', height: '1750px'}}>
                    {
                        homeCatalog.map((item)=> <OneProduct
                            available={item.available}
                            img_id={item.img_id}  
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            img_url={item.img_url}
                        /> )   
                    }
                    </div> 
                </div>       
    )
}

export default RootPage;