import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompared,
  addToCompare,
  removeFromCompare,
} from '../../../redux/compareRedux';
import { toggleFavorite } from '../../../redux/productsRedux';
import buttonStyles from '../Button/Button.module.scss';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({ id, name, price, promo, stars, oldPrice, isFavorite }) => {
  const dispatch = useDispatch();
  const compared = useSelector(getCompared);
  const isComparedActive = compared.includes(id);

  const handleToggleFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  const handleToggleCompare = e => {
    e.preventDefault();
    dispatch(isComparedActive ? removeFromCompare(id) : addToCompare(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            onClick={handleToggleFavorite}
            className={isFavorite ? buttonStyles.favoriteActive : ''}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={isComparedActive ? buttonStyles.active : ''}
            onClick={handleToggleCompare}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice && <span className={styles.oldPrice}>$ {oldPrice}</span>}
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export default ProductBox;
