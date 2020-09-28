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
};

function rootReducer(store = initialStore, action) {

  switch (action.type) {

    case ACT.UPDATE_LIST: // случилось событие - обновить список фильмов
      return {
        ...store,
        catalogList: action.payload,
      }

    case ACT.UPDATE_LOADING: // случилось событие - обновить индикатор загрузки данных с сервера
      return {
        ...store,
        isLoading: action.payload,
      }

    case ACT.UPDATE_COLOR: // случилось событие - обновить индикатор загрузки данных с сервера
      return {
        ...store,
        colorList: action.payload,
      }

    case ACT.UPDATE_CATEGORY: // случилось событие - обновить индикатор загрузки данных с сервера
      return {
        ...store,
        categoryList: action.payload,
      }

    case ACT.UPDATE_PRICE: // случилось событие - обновить индикатор загрузки данных с сервера
      return {
        ...store,
        priceRange: action.payload,
      }

    case ACT.UPDATE_BRAND: // случилось событие - обновить индикатор загрузки данных с сервера
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


  }

  return store;
}

export default () => combineReducers({
  app: rootReducer,
})
