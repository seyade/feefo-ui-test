import styled from 'styled-components';

export const ContactWrapper = styled.address`
	margin-left: 56px;
	font-style: normal;
`;

export const ContactTitle = styled.h4`
	margin-bottom: 12px;
	color: #aaa;
	font-size: 12px;
	font-weight: 600;
	text-transform: uppercase;
`;

export const ContactDetails = styled.section`
	display: flex;
	flex-direction: column;
	border-left: 1px solid #d5d5d5;
	padding-left: 8px;

	@media screen and (min-width: 660px) {
		border-left: none;
		padding-left: 0;
	}
`;

export const ContactInfo = styled.section`
	display: flex;
	align-items: center;
	font-size: 14px;
	color: #333;

	a {
		color: #888;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const ContactInfoTitle = styled.span`
	margin: 0 0 4px 0;
	font-weight: 700;
	color: #555;
`;

export const ContactAvatar = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	margin-right: 12px;

	font-size: 16px;
	font-weight: 600;
	color: #000;

	background-color: #ffd100;
	border-radius: 4px;
`;

export const ContactEmail = styled.span`
	margin-right: 24px;
	margin-bottom: 8px;

	a {
		@media screen and (min-width: 660px) {
			margin-left: 4px;
		}
	}

	@media screen and (min-width: 660px) {
		margin-bottom: 0;
	}
`;

export const ContactPanel = styled.section`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 660px) {
		display: flex;
		flex-direction: row;
	}
`;
