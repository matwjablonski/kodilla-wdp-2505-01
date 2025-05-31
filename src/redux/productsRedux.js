/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action types */
const TOGGLE_FAVORITE = 'app/products/TOGGLE_FAVORITE';
const SET_USER_RATING = 'app/products/SET_USER_RATING';

/* action creators */
export const toggleFavorite = id => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});

export const setUserRating = (productId, rating) => ({
  type: SET_USER_RATING,
  payload: { productId, rating },
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    case SET_USER_RATING: {
      const { productId, rating } = action.payload;
      return statePart.map(product =>
        product.id === productId ? { ...product, userRating: rating } : product
      );
    }
    default:
      return statePart;
  }
}
