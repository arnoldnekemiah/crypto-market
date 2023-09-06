import { useState } from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { NavLink } from 'react-router-dom';
import { filterByRankOrName } from './functions';

const Navigation = () => {
  const { cryptoArray, isLoading, error } = useSelector((store) => store.crypto);
  const [query, setQuery] = useState('');

  const filteredCrypto = query
    ? filterByRankOrName(cryptoArray, query)
    : cryptoArray; // Display all cryptocurrencies when query is empty

  if (isLoading) {
    return (
      <div id="loading" className="row">
        <ClipLoader
          id="loader"
          loading
          color="#5788e4"
          size="8rem"
          cssOverride={{
            borderWidth: '7px',
          }}
          speedMultiplier={1}
        />
      </div>
    );
  }

  if (error) {
    return <div id="errorMsg" className="row"><h1>{error}</h1></div>;
  }

  return (
    <nav id="coinNav">
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Filter by Rank or Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <ul id="coinGrid">
        {filteredCrypto.map((crypto) => (
          <li key={crypto.rank} className="gridItem">
            <NavLink className="link row gridLink" to={`/${crypto.rank}`}>
              <h2>{`#${crypto.rank}`}</h2>
              <p>{`${crypto.name}`}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      {!filteredCrypto.length && query && (
        <div id="searchResult">
          <span id="searchError" className="column">
            Out Of Bounds
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
