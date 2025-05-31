import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setDevice } from '../../../redux/deviceRedux';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  const MOBILE_BREAKPOINT = 768;
  const TABLET_BREAKPOINT = 1024;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < MOBILE_BREAKPOINT) {
        dispatch(setDevice('mobile'));
      } else if (width < TABLET_BREAKPOINT) {
        dispatch(setDevice('tablet'));
      } else {
        dispatch(setDevice('desktop'));
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
