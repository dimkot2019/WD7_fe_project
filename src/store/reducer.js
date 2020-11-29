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

  catalogInfo: {
    sortOrder: 'возр',
    elementsOnPage: 10,
    pageNumber: 0,
  },
  

  filter: {
      category: '',
      brand: [],
      color: '',
      price: '',
  }
   
};

// псевдокод
// const catalogInfo = {
//   pageNumber: '1',
//   sortOrder: 'возр' | 'убыв',
//   elementsOnPage: 10,
// };

// const {pageNumber, sortOrder, elementsOnPage} = useSelector(({pageNumber, sortOrder, elementsOnPage}) => ({pageNumber, sortOrder, elementsOnPage}));

// const startIndex = pageNumber * elementsOnPage;
// const endIndex = startIndex + elementsOnPage;
// const list = catalogList.slice(startIndex, endIndex);

// const handleChangePage = (newPageNumber) => {
//   // Dispatch доставляет экшен в редьюсер
//   dispatch(changePageNumber(newPageNumber))
// }

// list.map(l => (<div>{l}</div>))

// // Функция которая создает экшен
// const changePageNumber = (newPageNumber) => ({
//   type: ACT.CHANGE_PAGE_NUMBER,
//   payload: newPageNumber,
// });

function rootReducer(store = initialStore, action) {

  switch (action.type) {

    // Редьюсер меняет значение стора(изменяет стор) в зависимости от экшена
    case ACT.CHANGE_CATALOGINFO_SORTORDER: 
      return {
        ...store,
        catalogInfo: {
            ...store.catalogInfo,
        sortOrder: action.payload,
      }
    }



    case ACT.CHANGE_CATALOGINFO_ELEMENTSONPAGE: 
      return {
        ...store,
        catalogInfo: {
            ...store.catalogInfo,
        elementsOnPage: action.payload,
      }
    }



    case ACT.CHANGE_CATALOGINFO_PAGENUMBER: 
      return {
        ...store,
        catalogInfo: {
            ...store.catalogInfo,
            pageNumber: action.payload,
        }
      }



    

    case ACT.UPDATE_LIST: 
      return {
        ...store,
        catalogList: [...action.payload],
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
