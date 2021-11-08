import styled, { css } from 'styled-components';

export const CardWrapper = styled.article(
	({ size }) => css`
		position: relative;
		max-width: ${size ? size : 320}px;
		border-radius: 4px;
		background-color: #fff;
	`
);

export const CardTitle = styled.h3`
	padding-top: 16px;
	padding-left: 16px;
	margin-bottom: 4px;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	font-weight: 700;
	text-align: center;

	@media screen and (min-width: 480px) {
		text-align: left;
	}
`;

export const CardSubTitle = styled.h4`
	padding-top: 8px;
	padding-left: 16px;
	margin-bottom: 4px;
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	font-weight: 900;
`;

export const CardBody = styled.section``;
