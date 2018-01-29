import * as React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme('site', {
  easybib: props => props.theme.colors.white,
  bibme: props => props.theme.colors.blue
});

const paddingVertical = theme('site', {
  easybib: props => props.theme.sizing.paddingVertical,
  bibme: '8px'
});

const font = theme('site', {
  easybib: props => props.theme.font.family,
  bibme: props => props.theme.font.family
});
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${backgroundColor};
  padding: ${paddingVertical} 0;
  font-family: ${font};
`;

const LeftComponent = styled.div`
  flex: 0;
`;

const MiddleComponent = styled.div`
  flex: 2;
`;

const RightComponent = styled.div`
  flex: 1;
`;

interface PropsT {
  left: React.ReactElement<{}>;
  right: React.ReactElement<{}>;
  middle?: React.ReactElement<{}>;
}

export class Header extends React.Component<PropsT> {
  render() {
    return (
      <Wrapper>
        <LeftComponent>{this.props.left}</LeftComponent>
        <MiddleComponent>{this.props.middle}</MiddleComponent>
        <RightComponent>{this.props.right}</RightComponent>
      </Wrapper>
    );
  }
}

export default Header;
