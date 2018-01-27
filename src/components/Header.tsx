import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
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
}
export class Header extends React.Component<PropsT> {
    render() {
        return (
            <Wrapper>
                <LeftComponent>{this.props.left}</LeftComponent>
                <MiddleComponent>Middle</MiddleComponent>
                <RightComponent>Right</RightComponent>
            </Wrapper>
        );
    }
}

export default Header;