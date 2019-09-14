import styled from 'styled-components';
import color from '../../../../data/colors';

export const StyledHeader = styled.div`
  background: ${color.base};
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${color.grey1};
    text-decoration: none;
    font-weight: 400;
    font-size: 24px;
    margin: 0 1rem;
    outline: none;
  }
`;
