import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompared, removeFromCompare } from '../../../redux/compareRedux';
import { getAll } from '../../../redux/productsRedux';

import styles from './ProductCompareBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

