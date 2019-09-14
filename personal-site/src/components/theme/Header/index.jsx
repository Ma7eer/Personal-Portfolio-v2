import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Context, Container } from '../../common';
import SelectLanguage from './SelectLanguage';
import { Navbar, Links, StyledHeader } from './styles';

const Header = () => (
	<Context.Consumer>
		{({ toggleLanguage, lang }) => (
			<StyledHeader>
				<Navbar as={Container}>
					<Links>
						<Link to="/">
							<FormattedMessage id="home" />
						</Link>
						<Link to="/about">
							<FormattedMessage id="about" />
						</Link>
						<Link to="/project">
							<FormattedMessage id="project" />
						</Link>
						<Link to="/writing">
							<FormattedMessage id="writing" />
						</Link>
						<SelectLanguage lang={lang} toggleLanguage={toggleLanguage} />
					</Links>
				</Navbar>
			</StyledHeader>
		)}
	</Context.Consumer>
);

export default Header;
