// тут записываем так называемые экшн криэйторы - т.е. JS функции, которые должны сгенерировать
// и вернуть JS объект, который в свою очередь будет описывать ACTION - событие в экосистеме Redux
import * as ACT from './actions';

export function updateCatalogList(payload) {
  return { // это JS объект - и есть тот самый реальный Redux action
    type: ACT.UPDATE_LIST,
    payload,
  };
}

export function fetchFailed() {
  return {
    type: ACT.FETCH_FAILED,
  }
}

export function fetchSuccess() {
  return {
    type: ACT.FETCH_SUCCESS,
  }
}

export function updateLoading(payload) {
  return {
    type: ACT.UPDATE_LOADING,
    payload,
  }
}

export function fetchData(searchText) {

  return (dispatcher) => {

    dispatcher(updateLoading(true)); // установить индикатор загрузки данных в ТРУ - включить спинер
    const data = fetch('http://test-api.ipromote.ru/API/CATALOG/FIND');

    data.then(response => {
      return response.json();
    }).then(localData => {
      // this.setState({movieList: data}); - остатки от вызова в классе (когда фетчинг данных из класса)
      dispatcher(updateCatalogList(localData.data)); // записать в ридакс стор список фильмов

      dispatcher(fetchSuccess()); // установить статус состояния загрузки - УСПЕШНО загружены данные
    }).catch((e) => {

      dispatcher(fetchFailed()); // установить статус состояния загрузки - ПРОВАЛ данные НЕ удалось загрузить

      console.log('Sabotage: data fetch ERROR.', e);
    }).finally(() => {

      dispatcher(updateLoading(false)); // установить индикатор загрузки данных в FALSE (выключить спинер)

    });

  }
}
