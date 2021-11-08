import React from 'react';
import PropTypes from 'prop-types';

import Contact from '../../components/Contact';
import Overview from '../../components/Overview';

import { PageWrapper, PageHeader, PageTitle } from './styles';

export const AccountOverview = ({ data }) => {
	return (
		<PageWrapper className="AccountOverview">
			<PageHeader>
				<PageTitle>Account Overview</PageTitle>
				<Contact />
			</PageHeader>
			<>
				<Overview data={data} />
			</>
		</PageWrapper>
	);
};

AccountOverview.propTypes = {
	data: PropTypes.object.isRequired,
};

export default AccountOverview;
