import { render, screen } from '@testing-library/react';
import AccountOverview from '.';

describe('AccountOverview', () => {
	const props = {
		data: {
			salesOverview: {
				linesAttempted: 10,
				linesSaved: 5,
				successfulUploads: 10,
				uploads: 10,
			},
		},
	};

	it('renders without crashing and page has content', () => {
		render(<AccountOverview {...props} />);
		const element = screen.getByText(/Account Overview/i);
		expect(element).toBeInTheDocument();
	});
});
