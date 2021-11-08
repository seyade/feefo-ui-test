import { render, screen } from '@testing-library/react';
import Contact from '.';

describe('Contact', () => {
	it('renders without crashing', () => {
		render(<Contact />);
		const element = screen.getByTestId(/contact/i);
		expect(element).toBeInTheDocument();
	});

	it('has an email for support', () => {
		render(<Contact />);
		const element = screen.getByText(/support@feefo.com/i);
		expect(element).toBeInTheDocument();
	});

	it('has an telephone number for support', () => {
		render(<Contact />);
		const element = screen.getByText(/020 3362 4208/i);
		expect(element).toBeInTheDocument();
	});
});
