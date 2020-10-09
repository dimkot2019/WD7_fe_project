import { combineReducers } from "redux";
import * as ACT from './actions';

const initialStore = {
  catalogList: [],
  isLoading: false,
  fetchStatus: null,
  categoryList: [],
  colorList: [],
  brandList: [],
  priceRange: [],
  filter: {
      category: '',
      brand: [],
      color: '',
      price: '',
  }
};

function rootReducer(store = initialStore, action) {

  switch (action.type) {

    case ACT.UPDATE_LIST: 
      return {
        ...store,
        catalogList: action.payload,
      }

    case ACT.UPDATE_LOADING: 
      return {
        ...store,
        isLoading: action.payload,
      }

    case ACT.UPDATE_COLOR: 
      return {
        ...store,
        colorList: action.payload,
      }

    case ACT.UPDATE_CATEGORY: 
      return {
        ...store,
        categoryList: action.payload,
      }

    case ACT.UPDATE_PRICE: 
      return {
        ...store,
        priceRange: action.payload,
      }

    case ACT.UPDATE_BRAND: 
      return {
        ...store,
        brandList: action.payload,
      }

    case ACT.FETCH_SUCCESS: // случилось событие - обновить статус загрузки - УСПЕХ
    case ACT.FETCH_FAILED: // случилось событие - обновить статус загрузки - ПРОВАЛ
      return {
        ...store,
        fetchStatus: action.payload,
      }

      case ACT.UPDATE_FILTER_CATEGORY: 
      return {
        ...store,
        filter: {
            ...store.filter,
            category: action.payload,
        } 
      }

      case ACT.UPDATE_FILTER_BRAND: 
      return {
        ...store,
        filter: {
            ...store.filter,
            brand: action.payload,
        }
      }

      case ACT.UPDATE_FILTER_COLOR: 
      return {
        ...store,
        filter: {
            ...store.filter,
            color: action.payload,
        }
      }

      case ACT.UPDATE_FILTER_PRICE: 
      return {
        ...store,
        filter: {
            ...store.filter,
            price: action.payload,
        }
      }
  }

  return store;
}

export default () => combineReducers({
  app: rootReducer,
})
