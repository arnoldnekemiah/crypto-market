import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsChevronLeft, BsFillMicFill } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';

const Token = ({ rank }) => {
  const { cryptoArray } = useSelector((store) => store.crypto);

  const token = cryptoArray.filter((coin) => coin.rank === rank)[0];

  return (
    <article>
      <header className="row">
        <div className="homeLink first">
          <NavLink className="link" to="/" data-testid="navLink">
            <BsChevronLeft />
          </NavLink>
        </div>
        <p>Stats</p>
        <div className="row dummyIcons">
          <BsFillMicFill />
          <IoSettingsSharp />
        </div>
      </header>
      <div>
        <div className="statsTitle row">
          <h1>{`#${token.rank}`}</h1>
          <h2 className="column coinName">
            <span>{`${token.name}`}</span>
            <span>{`(${token.symbol})`}</span>
          </h2>
        </div>
        <div className="coinStats">
          <p className="row stats">
            <span>Market Cap</span>
            <span>{`$ ${token.marketCapUsd}`}</span>
          </p>
          <p className="row stats">
            <span>Price</span>
            <span>{`$ ${token.priceUsd}`}</span>
          </p>
          <p className="row stats">
            <span>Volume traded over past 24h</span>
            <span>{`$ ${token.volumeUsd24Hr}`}</span>
          </p>
          <p className="row stats">
            <span>Supply</span>
            <span>{`${token.supply} units`}</span>
          </p>
          <p className="row stats">
            <span>Max-supply</span>
            <span>{`${token.maxSupply} units`}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

Token.propTypes = {
  rank: PropTypes.string.isRequired,
};
export default Token;
