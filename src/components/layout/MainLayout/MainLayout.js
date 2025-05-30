import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Brands from '../../Brands/Brands';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Brands />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
