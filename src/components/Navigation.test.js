import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navigation from './Navigation';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('Navigation', () => {
  it('renders correctly', () => {
    const initialState = {
      crypto: {
        cryptoArray: [], // Replace with your mock data
        isLoading: false,
        error: null,
      },
    };

    const store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
