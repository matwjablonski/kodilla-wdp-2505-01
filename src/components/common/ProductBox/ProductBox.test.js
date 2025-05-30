import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';
import store from '../../../redux/store';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductBox
          id='test-id'
          name='Test Product'
          price={100}
          stars={3}
          promo='sale'
          isFavorite={false}
          isCompared={false}
        />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
