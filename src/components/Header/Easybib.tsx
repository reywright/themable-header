import * as React from 'react';
import styled from 'styled-components';

import Link from '../base/Link';
import HeaderBase from '../base/Header';
const logo = require('./easybib-logo.svg');

/**
 * Logo + Hamburger Styles
 */
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img.attrs({
  src: logo
})`
  display: flex;
  width: 112px;
  height: 42px;
`;

export const Hamburger = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  span {
    display: block;
    height: 2px;
    width: 20px;
    background-color: #666;
    &:nth-child(n + 1) {
      margin-top: 3px;
    }
  }
`;

export const EasybibLogo = () => {
  return (
    <Wrapper>
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
      <Logo />
    </Wrapper>
  );
};

/**
 * Right Links
 */

export const RightLinks = () => (
  <Wrapper>
    <Link>
      <b>My Citation List</b>
    </Link>
    <Link>Login</Link>
    <Link>Sign Up</Link>
  </Wrapper>
);

const Header = () => {
  return <HeaderBase left={<EasybibLogo />} right={<RightLinks />} />;
};

export default Header;
