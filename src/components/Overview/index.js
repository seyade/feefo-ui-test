import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card';

import {
	OverviewUpdate,
	OverviewInfo,
	OverviewActivity,
	ActivityCounter,
	Counter,
} from './styles';

const Overview = ({ data }) => {
	const {
		salesOverview: { linesAttempted, linesSaved, successfulUploads, uploads },
	} = data;

	const getPercentage = (total, actual) => {
		let result = 0;

		if (typeof total !== 'undefined' && typeof actual !== 'undefined') {
			result = (actual / total) * 100;
		}

		return result;
	};

	const uploadsPercentage = getPercentage(uploads, successfulUploads);

	const lineSavedPercentage = getPercentage(linesAttempted, linesSaved);

	return (
		<Card title="Sales" size={580} icon={true} iconType={faUpload}>
			<OverviewUpdate>
				<p>
					You had <b>{uploads}</b> uploads and <b>{linesAttempted}</b> lines
					added.
				</p>
				<OverviewInfo>
					<FontAwesomeIcon icon={faInfoCircle} />
				</OverviewInfo>
			</OverviewUpdate>
			<OverviewActivity>
				<ActivityCounter>
					<Counter>{uploadsPercentage}%</Counter> Upload success
				</ActivityCounter>
				<ActivityCounter>
					<Counter>{lineSavedPercentage}%</Counter> Lines saved
				</ActivityCounter>
			</OverviewActivity>
		</Card>
	);
};

Overview.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Overview;
