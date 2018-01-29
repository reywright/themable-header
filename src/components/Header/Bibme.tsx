import * as React from 'react';
import styled from 'styled-components';
import LinkBase from '../base/Link';
import HeaderBase from '../base/Header';
import FlexWrapper from '../base/Flex';

const logo = require('./bibme-logo.svg');

const Link = LinkBase.extend`
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.font.weight.bold};
  font-size: 11px;
`;

const Logo = styled.img.attrs({
  src: logo
})`
  height: 34px;
  padding-left: 24px;
  margin-right: 120px;
`;

const RightLinksWrapper = FlexWrapper.extend`
  color: ${props => props.theme.colors.white};
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
`;

const RightLinks = () => (
  <RightLinksWrapper>
    <Link>Login</Link>
    &nbsp;|&nbsp;
    <Link>Register</Link>
  </RightLinksWrapper>
);

const MiddleLinksWrapper = FlexWrapper.extend`
  justify-content: flex-start;
`;

const MiddleLink = Link.extend`
  padding-right: 20px;
  font-size: 12px;
`;

const MiddleLinks = () => {
  return (
    <MiddleLinksWrapper>
      <MiddleLink>My Papers</MiddleLink>
      <MiddleLink>Plagiarism and Grammar Checker</MiddleLink>
      <MiddleLink>Citation Guide</MiddleLink>
      <MiddleLink>Title Page</MiddleLink>
      <MiddleLink>Support</MiddleLink>
    </MiddleLinksWrapper>
  );
};
const Header = () => {
  return <HeaderBase left={<Logo />} right={<RightLinks />} middle={<MiddleLinks />} />;
};

export default Header;
