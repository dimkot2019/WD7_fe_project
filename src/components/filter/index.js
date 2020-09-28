import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {ColorFilter} from './byColor'
import { PriceFilter } from './byPrice'
import { CategoryFilter } from './byCategory'
import { BrandFilter } from './byBrand'
import {fetchFilterData} from '../../store/action_creatores'

export function CatalogFilter () {
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(fetchFilterData());
        },[]
    )
    return (
        <div className="shop_sidebar_area">
            <CategoryFilter/>
            <BrandFilter/>
            <ColorFilter/>
            <PriceFilter/>
        </div>
    )
}