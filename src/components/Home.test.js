import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './Home';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  crypto: {
    cryptoArray: [],
    isLoading: false,
    error: null,
  },
});

describe('Home', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
