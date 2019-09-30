import styled from 'styled-components';
import colors from '../../../../data/colors';

export const StyledHeader = styled.div`
  background: ${colors.base};
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
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 400;
    font-size: 24px;
    margin: 0 1rem;
    outline: none;

    border-radius: 10px;
    padding: 10px;

    :hover {
      color: ${colors.base};
      background: linear-gradient(
        to right,
        ${colors.primary},
        ${colors.secondary}
      );
    }
  }
`;
// border: 1px solid ${colors.primary};

export const Separator = styled.span`
  color: ${colors.grey3};
  font-weight: bold;
`;
