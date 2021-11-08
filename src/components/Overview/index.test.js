import { render, screen } from '@testing-library/react';
import Overview from '.';

describe('Overview', () => {
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

	it('renders without crashing and has a title', () => {
		render(<Overview {...props} />);
		const element = screen.getByText(/Sales/i);
		expect(element).toBeInTheDocument();
	});

	it('has a overview summary text', () => {
		const { getByText } = render(<Overview {...props} />);

		const element = getByText(/You had uploads and lines added/i);

		expect(element).toBeInTheDocument();
	});

	it('shows the uploads success percentage', () => {
		const { getByText } = render(<Overview {...props} />);

		const element = getByText(/100%/i);

		expect(element).toBeInTheDocument();
	});

	it('shows the lines saved success percentage', () => {
		const { getByText } = render(<Overview {...props} />);

		const element = getByText(/50%/i);

		expect(element).toBeInTheDocument();
	});
});
