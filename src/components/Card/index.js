import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CardWrapper, CardTitle, CardSubTitle, CardBody } from './styles';

const Card = ({ title, subTitle, size, icon, iconType, children }) => {
	return (
		<CardWrapper size={size} data-testid="card">
			<header>
				<CardTitle>
					{icon && <FontAwesomeIcon icon={iconType} />} {title}
				</CardTitle>
				{subTitle && <CardSubTitle>{subTitle}</CardSubTitle>}
			</header>

			<CardBody>{children}</CardBody>
		</CardWrapper>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
	size: PropTypes.number,
	icon: PropTypes.bool,
	iconType: PropTypes.object,
	children: PropTypes.node.isRequired,
};

export default Card;
