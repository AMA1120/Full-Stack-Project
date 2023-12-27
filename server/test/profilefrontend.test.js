import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import Userprofile from './Userprofile';

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: {} }),
    ok: true,
  })
);

describe('Userprofile component', () => {
  it('renders user details correctly', async () => {
    render(<Userprofile/>);

    // You might need to update this if your component fetches user details asynchronously
    await waitFor(() => {
      expect(screen.getByText('User Profile')).toBeInTheDocument();
      expect(screen.getByText('Full Name:')).toBeInTheDocument();
      expect(screen.getByText('Email:')).toBeInTheDocument();
      expect(screen.getByText('Mobile Number:')).toBeInTheDocument();
      expect(screen.getByText('City:')).toBeInTheDocument();
      expect(screen.getByText('Edit')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
    });
  });

  it('switches to edit mode on "Edit" button click', async () => {
    render(<Userprofile />);

    // You might need to update this if your component fetches user details asynchronously
    await waitFor(() => {
      fireEvent.click(screen.getByText('Edit'));
      expect(screen.getByLabelText('Full Name:')).toBeInTheDocument();
      expect(screen.getByLabelText('Email:')).toBeInTheDocument();
      expect(screen.getByLabelText('Mobile Number:')).toBeInTheDocument();
      expect(screen.getByLabelText('City:')).toBeInTheDocument();
      expect(screen.getByText('Save')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  it('cancels edit mode on "Cancel" button click', async () => {
    render(<Userprofile />);

    // You might need to update this if your component fetches user details asynchronously
    await waitFor(() => {
      fireEvent.click(screen.getByText('Edit'));
      fireEvent.click(screen.getByText('Cancel'));
      expect(screen.getByText('Edit')).toBeInTheDocument();
      expect(screen.getByText('Delete')).toBeInTheDocument();
    });
  });

  // Add more test cases based on your component's functionality
});