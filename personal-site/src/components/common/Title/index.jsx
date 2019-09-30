import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import MaherPicture from '../../../images/maher.png';
import colors from '../../../../data/colors';

const Header = styled.h1`
  font-size: 72px;
  text-align: center;
`;
// margin-top: 10%;

const FirstName = styled.span`
  background: -webkit-linear-gradient(${colors.grey1}, ${colors.grey6});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LastName = styled.span`
  background: -webkit-linear-gradient(${colors.secondary}, ${colors.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubHeader = styled.h2`
  font-size: 55px;
  text-align: center;
  color: ${colors.primary};
`;
// background: -webkit-linear-gradient(${colors.grey1}, ${colors.grey6});
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;

const Paragraph = styled.h3`
  font-size: 24px;
  text-align: center;
  color: ${colors.primary};
`;

const Highlighter = styled.span`
  font-size: 20px;
  color: ${colors.base};
  background: linear-gradient(to right, ${colors.grey1}, ${colors.grey6});
  border-radius: 5px;
  padding-top: 3px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
`;

const InternalLink = styled.a`
  color: ${colors.primary};
  :hover {
    color: ${colors.secondary};
  }
`;

export const Title = () => (
  <>
    <div
    	style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center' }}
    >
    	<img
    		src={MaherPicture}
    		alt="maher"
    		width="200"
    		style={{ borderRadius: '50%' }}
    	/>
    </div>

    <Header>
    	<FirstName>
    		<FormattedMessage id="first_name" />
    	</FirstName>{' '}
    	<LastName>
    		<FormattedMessage id="last_name" />
    	</LastName>
    </Header>

    <SubHeader>Freelance Web Developer</SubHeader>
    <Paragraph>
      I build products for the Web. Hire me to build you a{' '}
    	<Highlighter>Landing&nbsp;Page</Highlighter> ,{' '}
    	<Highlighter>E&nbsp;-&nbsp;commerce&nbsp;site</Highlighter>, or{' '}
    	<Highlighter>Web&nbsp;application</Highlighter>
    </Paragraph>
    <Paragraph>
      Check out my <InternalLink href="#">work</InternalLink>,{' '}
    	<InternalLink href="#">writing</InternalLink>, or{' '}
    	<InternalLink href="#">contact me</InternalLink>
    </Paragraph>
  </>
);
