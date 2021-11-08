import styled, { css } from 'styled-components';

export const OverviewUpdate = styled.section`
	padding: 16px;
	border-bottom: 1px solid #efefef;

	p {
		font-size: 14px;
		padding-bottom: 4px;
		text-align: center;

		@media screen and (min-width: 480px) {
			text-align: left;
		}
	}
`;

export const OverviewInfo = styled.span`
	position: absolute;
	top: 12px;
	right: 12px;
	color: #aaa;

	&:hover {
		cursor: pointer;
	}
`;

export const OverviewActivity = styled.section(
	({ resize }) => css`
		display: block;
		width: 100%;

		@media screen and (min-width: 480px) {
			display: flex;
			width: 100%;
		}
	`
);

export const ActivityCounter = styled.div`
	flex: 0 1 100%;
	padding: 16px;
	font-size: 12px;
	font-weight: 700;
	text-transform: uppercase;
	color: #999;
	background-color: #fff;
	border-right: 1px solid #efefef;
	border-bottom: 1px solid #efefef;
	text-align: center;

	&:last-child {
		border-right: 0;
	}

	@media screen and (min-width: 768px) {
		border-bottom: none;
		text-align: left;
	}
`;

export const Counter = styled.span`
	display: flex;
	flex-direction: column;
	font-size: 32px;
	font-weight: 700;
	color: #11b202;
`;
