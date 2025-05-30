import React from 'react';
import PropTypes from 'prop-types';
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
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  oldPrice,
  isFavorite,
  isCompared,
  image,
}) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={'/images/bed/' + image} alt={name} />
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
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar} />
              ) : (
                <FontAwesomeIcon icon={farStar} />
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
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button
            variant='outline'
            className={isCompared ? buttonStyles.outlineActive : ''}
          >
            <FontAwesomeIcon icon={faExchangeAlt} />
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
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompared: PropTypes.bool,
  image: PropTypes.string,
};

export default ProductBox;
