import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductBox
          id='test-id'
          name='Test Product'
          price={100}
          stars={4}
          promo='SALE'
          oldPrice={150}
          isFavorite={false}
        />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
