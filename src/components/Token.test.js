import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import configureStore from 'redux-mock-store';
import Token from './Token';

// Create a mock Redux store
const mockStore = configureStore([]);

describe('Token', () => {
  it('renders correctly', () => {
    const initialState = {
      crypto: {
        cryptoArray: [
          {
            rank: '1',
            name: 'Bitcoin',

          },

        ],
      },

    };

    const store = mockStore(initialState);

    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Token rank="1" />
        </Router>
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
