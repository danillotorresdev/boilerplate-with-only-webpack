import React from 'react';
import Header from '../../components/Header';
import { render, fireEvent } from '@testing-library/react';

const handleLimitOfString = jest.fn();

describe('Header Component', () => {
  it('should render Header', () => {
    console.error = jest.fn();
    const { debug } = render(<Header />);
    // debug();
  });

  it('should render Header component with props', () => {
    const props = {
      addressValue: 'endereco',
      addressNumber: '123',
      addressId: '12',
    };

    const { getByTestId } = render(<Header userStoredAddress={props} />);
  });

  it('should render Header component without props', () => {
    const { getByTestId } = render(<Header />);
  });
});
