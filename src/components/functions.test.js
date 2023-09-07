import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { generateNavLinks, filterByRankOrName, generateRoutes } from './functions';

describe('generateNavLinks', () => {
  it('generates navigation links correctly', () => {
    const cryptoArray = [
      { rank: 1, name: 'Bitcoin' },
      { rank: 2, name: 'Ethereum' },
    ];

    const navLinks = generateNavLinks(cryptoArray);

    const component = renderer.create(
      <Router>
        <ul>{navLinks}</ul>
      </Router>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('filterByRankOrName', () => {
  it('filters tokens by rank or name', () => {
    const cryptoArray = [
      { rank: 1, name: 'Bitcoin' },
      { rank: 2, name: 'Ethereum' },
    ];

    const filteredTokens = filterByRankOrName(cryptoArray, 'bitcoin');

    expect(filteredTokens).toMatchSnapshot();
  });
});

describe('generateRoutes', () => {
  it('generates routes correctly', () => {
    const cryptoArray = [
      { rank: 1, name: 'Bitcoin' },
      { rank: 2, name: 'Ethereum' },
    ];

    const routes = generateRoutes(cryptoArray);

    const component = renderer.create(
      <Router>
        <Routes>
          {routes}
        </Routes>
      </Router>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
