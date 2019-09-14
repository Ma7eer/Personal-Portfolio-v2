import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Layout, Container } from '../components/common';
import SEO from '../components/common/SEO';
import Header from '../components/theme/Header';

const ProjectPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="project" />
			<Header />
			<Welcome as={Container}>
				<h2>
					<FormattedMessage id="project" />
				</h2>
			</Welcome>
		</React.Fragment>
	</Layout>
);

const Welcome = styled.div`
  padding: 2rem 0;
`;

export default ProjectPage;
