import styled from 'styled-components';

const Link = styled.a`
  font-size: 12px;
  font-weight: ${props => props.theme.font.weight.light};
  color: ${props => props.theme.colors.gray};
`;

export default Link;
