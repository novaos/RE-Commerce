enum ActionTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
  SORT_BY_RATING = 'SORT_BY_RATING',
  SORT_BY_NEWNESS = 'SORT_BY_NEWNESS',
  SORT_BY_OLDEST = 'SORT_BY_OLDEST',
  SORT_BY_PRICE = 'SORT_BY_PRICE',
  SHOW_ONLY_WOMEN = 'FILTER_WOMAN',
  SHOW_ONLY_MEN = 'FILTER_MEN',
  SHOW_ONLY_KIDS = 'FILTER_KIDS',
  SHOW_ONLY_JEWELLERY = 'FILTER_JEWELLERY',
  SHOW_ONLY_ACCESSORIES = 'FILTER_ACCESSORIES',
  FILTER_BY_PRICE = 'FILTER_BY_PRICE',
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  EDIT_QUANTITY = 'EDIT_QUANTITY',
  GET_SELECTED_PRODUCT = 'GET_SELECTED_PRODUCT'
}

enum SortTypes {
  rating = 'rating',
  newness = 'newness',
  oldest = 'oldest',
  price = 'price'
}

enum WearTypes {
  women = 'women',
  men = 'men',
  kids = 'kids',
  jewellery = 'jewellery',
  accessories = 'accessories'
}

export { WearTypes, SortTypes, ActionTypes };
