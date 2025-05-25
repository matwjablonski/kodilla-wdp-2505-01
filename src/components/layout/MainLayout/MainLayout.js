import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setDevice } from '../../../redux/deviceRedux';

const MainLayout = ({ children }) => {

  const dispatch=useDispatch();

  useEffect(()=> {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        dispatch(setDevice('mobile'));
      } else if (width < 1024) {
        dispatch(setDevice('tablet'));
      } else {
        dispatch(setDevice('desktop'));
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch])

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );

}


MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
