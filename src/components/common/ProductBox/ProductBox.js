import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompared,
  addToCompare,
  removeFromCompare,
} from '../../../redux/compareRedux';
import { toggleFavorite, setUserRating } from '../../../redux/productsRedux';
import buttonStyles from '../Button/Button.module.scss';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  oldPrice,
  isFavorite,
  isCompared,
  userRating,
}) => {
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
            <FontAwesomeIcon icon={faShoppingBasket} /> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          <StarRating
            rating={stars}
            userRating={userRating}
            onRate={rate => dispatch(setUserRating(id, rate))}
          />
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
            <FontAwesomeIcon icon={faHeart} /> Favorite
          </Button>
          <Button
            variant='outline'
            className={isComparedActive ? buttonStyles.active : ''}
            onClick={handleToggleCompare}
          >
            <FontAwesomeIcon icon={faExchangeAlt} /> Add to compare
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
  isCompared: PropTypes.bool,
  userRating: PropTypes.number,
};

export default ProductBox;
