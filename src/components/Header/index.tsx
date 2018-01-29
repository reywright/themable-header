import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LeftComponent = styled.div`
  flex: 1;
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
