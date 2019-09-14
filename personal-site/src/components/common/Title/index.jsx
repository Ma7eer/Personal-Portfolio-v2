import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import colors from '../../../../data/colors';

const TitleContainer = styled.h1`
  font-size: 72px;
  text-align: center;
  margin-top: 10%;
`;

const FirstName = styled.span`
  background: -webkit-linear-gradient(${colors.grey1}, ${colors.grey6});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LastName = styled.span`
  background: -webkit-linear-gradient(${colors.primary}, ${colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title = () => (
	<TitleContainer>
		<FirstName>
			<FormattedMessage id="first_name" />
		</FirstName>{' '}
		<LastName>
			<FormattedMessage id="last_name" />
		</LastName>
	</TitleContainer>
);
