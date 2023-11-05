import { render } from '@testing-library/react';
import Login from '../../../../src/app/login/page';

describe('Login', () => {
	it('should match snapshot', () => {
		const component = render(<Login title="Login" />);
		expect(component).toMatchSnapshot();
	});
});
