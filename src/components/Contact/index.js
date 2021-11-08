import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import useResizeWindow from '../../hooks/useResizeWindow';

import {
	ContactWrapper,
	ContactTitle,
	ContactInfo,
	ContactAvatar,
	ContactInfoTitle,
	ContactDetails,
	ContactEmail,
	ContactPanel,
} from './styles';

const Contact = () => {
	const { width } = useResizeWindow();

	const [isResize, setIsResize] = useState(false);

	const toggleIcon = useCallback(() => {
		if (width >= 660) {
			setIsResize(true);
		} else {
			setIsResize(false);
		}
	}, [width]);

	useEffect(() => {
		toggleIcon();
	}, [toggleIcon]);

	return (
		<ContactWrapper data-testid="contact">
			<ContactTitle>Your Feefo support contact</ContactTitle>
			<ContactInfo>
				<ContactAvatar role="presentation">S</ContactAvatar>
				<ContactDetails>
					<ContactInfoTitle role="heading" aria-level="4">
						Support
					</ContactInfoTitle>
					<ContactPanel>
						<ContactEmail>
							{isResize && <FontAwesomeIcon icon={faEnvelope} />}
							<a href="mailto:support@feefo.com">support@feefo.com</a>
						</ContactEmail>
						<a href="tel:02033624208">020 3362 4208</a>
					</ContactPanel>
				</ContactDetails>
			</ContactInfo>
		</ContactWrapper>
	);
};

export default Contact;
