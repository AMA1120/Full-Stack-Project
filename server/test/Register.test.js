// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Register from './Register';

// test('should submit the registration form', async () => {
//   render(<Register />);

//   // Fill in the form fields
//   fireEvent.change(screen.getByPlaceholderText('Full Name'), { target: { value: 'John Doe' } });
//   fireEvent.change(screen.getByPlaceholderText('Telephone No'), { target: { value: '123456789' } });
//   fireEvent.change(screen.getByPlaceholderText('City'), { target: { value: 'CityName' } });
//   fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
//   fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'john_doe' } });
//   fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
//   fireEvent.click(screen.getByLabelText(/I agree to this website's terms and conditions/i));

//   // Submit the form
//   fireEvent.click(screen.getByText('Register'));

//   // Wait for the registration to complete
//   await waitFor(() => {
//     // Assert that the success message or redirection occurs
//     expect(screen.getByText('Registered successfully!')).toBeInTheDocument();
//     // Alternatively, you can check for the redirection if it happens
//     // For example: expect(window.location.href).toContain('../Login');
//   });
// });
