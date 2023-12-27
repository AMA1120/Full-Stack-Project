// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { MemoryRouter } from 'react-router-dom'; // or BrowserRouter

// import Userprofile from  '../../pages/Userprofile/Userprofile';

// describe('Userprofile component', () => {
//     // Mock the fetch function
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         ok: true,
//         json: () => Promise.resolve({ data: { fullName: 'John Doe', email: 'john@example.com', teleno: '123456789', city: 'Sample City' } }),
//       })
//     );
  
//     it('renders Userprofile component', async () => {
//       // Render the component within MemoryRouter
//       render(
//         <MemoryRouter>
//           <Userprofile />
//         </MemoryRouter>
//       );
  
//       // Wait for the data to be fetched and the component to re-render
//       await waitFor(() => {
//         expect(screen.getByText(/User Profile/i)).toBeInTheDocument();
//       });
  
//       // Check if the user details are displayed
//       expect(screen.getByText(/Full Name:/i)).toHaveTextContent('John Doe');
//       expect(screen.getByText(/Email:/i)).toHaveTextContent('john@example.com');
//       expect(screen.getByText(/Mobile Number:/i)).toHaveTextContent('123456789');
//       expect(screen.getByText(/City:/i)).toHaveTextContent('Sample City');
  
//       // Test the Edit button
//       fireEvent.click(screen.getByText(/Edit/i));
  
//       // Test the Cancel button
//       fireEvent.click(screen.getByText(/Cancel/i));
  
//       // Test the Delete button
//       fireEvent.click(screen.getByText(/Delete/i));
//     });
//   });