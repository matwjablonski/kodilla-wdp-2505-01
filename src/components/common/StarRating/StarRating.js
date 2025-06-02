import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import styles from './StarRating.module.scss';

const StarRating = ({ rating, userRating, onRate }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <div>
      {[1, 2, 3, 4, 5].map(i => (
        <FontAwesomeIcon
          key={i}
          icon={i <= (hovered ?? userRating ?? rating) ? faStar : farStar}
          className={`${styles.star} ${
            (hovered !== null || userRating !== null) && i <= (hovered ?? userRating)
              ? styles['star--active']
              : ''
          }`}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onRate(i)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

export default StarRating;
