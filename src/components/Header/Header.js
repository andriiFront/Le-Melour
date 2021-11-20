import React from 'react';
import { useSelector } from 'react-redux';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { getNavItems } from '../../store';
import phone from '../../images/phone.svg';
import './Header.scss';

export const Header = () => {
  const navItems = useSelector(getNavItems);

  return (
    <header className="header">
      <div className="header__container">
        <Logo logoClass="header__logo" />
        <Nav data={navItems} />

        <div className="header__phone">
          <a
            href="tel:123-456-7890"
            className="header__link-fullscrn"
          >
            Contact Us
          </a>
          <a
            href="tel:123-456-7890"
            className="header__link-tablet"
          >
            <img
              src={phone}
              alt="phone"
              className="header__icon"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
