import React from 'react'
import {useSelector} from "react-redux";

export function ColorFilter () {
    const dataList = useSelector(
        (store)=>{
            return store.app.colorList;
        }
    );

    function renderList (item) {
        return (
            <li key={item.id}><a href={item.url}>{item.title}</a></li>
        )
    }


    return (
        <div className="widget color mb-50">
            <h6 className="widget-title mb-30">Color</h6>
            <div className="widget-desc">
                <ul className="d-flex">
                    {
                        dataList.map(renderList)
                    }
                </ul>
            </div>
        </div>
    )
}

    // <li><a href="#" className="color1"></a></li>
    // <li><a href="#" className="color2"></a></li>
    // <li><a href="#" className="color3"></a></li>
    // <li><a href="#" className="color4"></a></li>
    // <li><a href="#" className="color5"></a></li>
    // <li><a href="#" className="color6"></a></li>
    // <li><a href="#" className="color7"></a></li>
    // <li><a href="#" className="color8"></a></li>