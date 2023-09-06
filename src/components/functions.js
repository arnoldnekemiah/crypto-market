import { NavLink, Route } from 'react-router-dom';
import Token from './Token';

export const generateNavLinks = (cryptoArray) => {
  const linkArray = [];
  for (let rank = 1; rank <= cryptoArray.length; rank += 1) {
    linkArray.push(
      <li key={rank}>
        <NavLink className="link" to={`/${rank}`}>
          {`#${cryptoArray[rank - 1].rank} ${cryptoArray[rank - 1].name}`}
        </NavLink>
      </li>,
    );
  }
  return linkArray;
};

export const searchByRank = (arr, rank) => {
  const token = arr.filter((coin) => coin.rank === rank);

  if (token.length === 0) {
    return <p>Out Of Bounds.</p>;
  }

  const result = (
    <NavLink key={rank} className="link" to={`/${token[0].rank}`}>
      {`#${token[0].rank} ${token[0].name}`}
    </NavLink>
  );

  return result;
};

export const generateRoutes = (arr) => {
  const routes = [];

  for (let rank = 1; rank <= arr.length; rank += 1) {
    routes.push(
      <Route
        key={rank}
        path={`/${rank}`}
        element={<Token rank={`${rank.toString()}`} />}
      />,
    );
  }

  return routes;
};
