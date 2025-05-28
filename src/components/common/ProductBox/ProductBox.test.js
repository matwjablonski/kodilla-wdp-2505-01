import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const mockProps = {
      id: 'test-id',
      name: 'Test product',
      price: 100,
      stars: 2,
      promo: 'SALE',
      oldPrice: 120,
      favorite: false,
      userRating: null,
    };

    const component = shallow(
      <Provider store={store}>
        <ProductBox {...mockProps} />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
