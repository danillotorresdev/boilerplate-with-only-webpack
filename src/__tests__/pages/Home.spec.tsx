import React from 'react';
import Home from '../../pages/Home';
import { render } from '@testing-library/react';

jest.mock('graphql-hooks', () => {
  return {
    useManualQuery: () => {
      return [
        () => {},
        {
          loading: false,
          error: false,
          data: null,
        },
      ];
    },
  };
});

describe('Home Page', () => {
  it('should render Home page', () => {
    console.error = jest.fn();
    const { debug } = render(<Home />);
    // debug();
  });
});
