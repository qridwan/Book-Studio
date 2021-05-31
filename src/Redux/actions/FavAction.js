export const ADD_TO_FAV = 'ADD_TO_FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';


export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("https://609cd6ba04bffa001792d638.mockapi.io/books")
        .then(handleErrors)
        .then(res => res.json())
        .then(data => {
          dispatch(fetchProductsSuccess(data));
          return data;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  books: products 
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const addToFav =( id, img, name, price)=> {
    return ( {type: ADD_TO_FAV,
    id, name, price, img})
}

export const removeFromFav = id => {
    return ( {type: REMOVE_FROM_FAV, id })
}