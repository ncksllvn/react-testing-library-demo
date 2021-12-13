import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CoolForm from './CoolForm';

test('renders form element', async () => {
    render(<CoolForm />);
    screen.getByText('Login');
    screen.getByLabelText('Password');

    const usernameInput = screen.getByLabelText('Username');
    const submitButton = screen.getByText('Submit form');

    const event = {
        target: {
            value: 'ncksllvn'
        }
    };

    fireEvent.change(usernameInput, event);
    fireEvent.click(submitButton);

    await screen.findByText(`You're logged in as ncksllvn`);
    await screen.findByAltText('User profile picture');
});
