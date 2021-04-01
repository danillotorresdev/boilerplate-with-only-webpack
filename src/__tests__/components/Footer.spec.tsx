import React from 'react';
import Footer from '../../components/Footer';
import { render, fireEvent } from '@testing-library/react';

let windowSpy: any;
beforeEach(() => {
  windowSpy = jest.spyOn(global, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});

it('should return https://example.com', () => {
  windowSpy.mockImplementation(() => ({
    location: {
      origin: 'https://example.com',
    },
  }));

  expect(window.location.origin).toEqual('https://example.com');
});

it('should be undefined.', () => {
  windowSpy.mockImplementation(() => undefined);

  expect(window).toBeUndefined();
});

// describe('Footer Component', () => {
//   it('should render Footer', () => {
//     render(<Footer />);
//   });

//   it('should back to top', () => {
//     const { getByTestId } = render(<Footer />);

//     const backToTopBtn = getByTestId('backToTop');
//     fireEvent.click(backToTopBtn);
//   });
// });
