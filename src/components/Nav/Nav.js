import React, { useState } from 'react';
import PropTypes from 'prop-types';
import menu from '../../images/menu.svg';
import './Nav.scss';

export const Nav = ({ data }) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <nav className="nav header__nav">
      <button
        className="nav__icon"
        type="button"
        onClick={() => setVisibleMenu(!visibleMenu)}
      >
        {visibleMenu
          ? (
            <span className="fas fa-times" />
          )
          : (
            <img
              src={menu}
              alt="menu icon"
            />
          )
        }
      </button>

      <ul className={`nav__list ${visibleMenu || 'nav__list-hidden'}`}>
        {data.map(item => (
          <li key={item.id} className="nav__item">
            <a href={item.idLink} className="nav__link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired,
    ).isRequired,
  ).isRequired,
};
