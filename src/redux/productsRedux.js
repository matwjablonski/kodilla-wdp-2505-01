/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

const TOGGLE_FAVORITE = 'products/TOGGLE_FAVORITE';

export const toggleFavorite = id => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      console.log('toggle favorite for id:', action.payload);
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    default:
      return statePart;
  }
}
