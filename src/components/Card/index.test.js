import { render, screen } from '@testing-library/react';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import Card from '.';

describe('Card', () => {
	it('renders without crashing', () => {
		render(
			<Card>
				<p>The card</p>
			</Card>
		);
		const card = screen.getByTestId(/card/i);
		expect(card).toBeInTheDocument();
	});

	it('has a title and hides icon', () => {
		const { getByText, getByTestId } = render(
			<Card title="The Card Title 1" icon={true} iconType={faUpload}>
				<p>The card</p>
			</Card>
		);

		expect(getByText(/The Card Title 1/)).toBeInTheDocument();

		const card = getByTestId('card');

		expect(card.querySelector('.svg-inline--fa')).toHaveAttribute('data-icon');
	});

	it('has a title and shows title icon', () => {
		const { getByText, getByTestId } = render(
			<Card title="The Card Title 2" icon={true} iconType={faUpload}>
				<p>The card</p>
			</Card>
		);

		expect(getByText(/The Card Title 2/)).toBeInTheDocument();

		const card = getByTestId('card');

		expect(card.querySelector('.svg-inline--fa')).toHaveAttribute('data-icon');
	});

	it('has a title and subtitle', () => {
		const { getByText } = render(
			<Card
				title="The Card Title 1"
				subTitle="The card subtitle"
				icon={true}
				iconType={faUpload}
			>
				<p>The card</p>
			</Card>
		);

		expect(getByText(/The card subtitle/)).toBeInTheDocument();
	});

	it('has content', () => {
		const { getByText } = render(
			<Card
				title="The Card Title 1"
				subTitle="The card subtitle"
				icon={true}
				iconType={faUpload}
			>
				<p>The card content</p>
			</Card>
		);

		expect(getByText(/The card content/)).toBeInTheDocument();
	});

	it('has a size', () => {
		const { getByTestId } = render(
			<Card
				title="The Card Title 1"
				subTitle="The card subtitle"
				icon={true}
				iconType={faUpload}
				size={560}
			>
				<p>The card content</p>
			</Card>
		);

		const card = getByTestId(/card/);

		expect(card).toHaveStyleRule('max-width', '560px');
	});
});
