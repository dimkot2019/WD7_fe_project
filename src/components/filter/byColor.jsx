import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {updateFilterColor} from '../../store/action_creatores';

export function ColorFilter () {
    const dataList = useSelector(
        (store)=>{
            return store.app.colorList;
        }
    );
    
    
    const dispatch = useDispatch();
    const colorID = useSelector((store)=> store.app.filter.color);
    
    function handleClick(e) {
        dispatch(updateFilterColor(e.target.getAttribute('data-color')));
    }
    
    // function handleClickReset() {
    //     dispatch(updateFilterColor(''));
    // }

    function renderList (item) {
        return (
        <li key={item.id}><a style={{
            backgroundColor: `#${item.color}`,
            border: colorID === item.id ? '3px red dashed': '3px white solid',
            cursor: 'pointer'
        }}href={item.url} onClick= {handleClick}
          data-color={item.id}
          >&nbsp;</a></li>
        )
    }


    return (
        <div className="widget color mb-50">
            <h6 className="widget-title mb-30">Цвета</h6>
            <div className="widget-desc">
                <ul className="d-flex">
                    {
                        dataList.map(renderList)
                    }
                </ul>
                <a style={{cursor: 'pointer'}}
                   onClick={handleClick}
                   data-color=''>СБРОС ЦВЕТА</a>
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