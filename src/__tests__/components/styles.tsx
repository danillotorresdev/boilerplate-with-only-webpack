import React from 'react';
import { SuggestionsList } from '../../components/Banner/styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('styles from styled-components', () => {
  it('should render Styles from Banner', () => {
    const tree = renderer.create(<SuggestionsList />).toJSON();

    expect(tree).not.toHaveStyleRule('display', 'none');
  });

  it('should render Styles from Banner with display none', () => {
    const tree = renderer
      .create(<SuggestionsList showSuggestions={false} />)
      .toJSON();

    expect(tree).toHaveStyleRule('display', 'none');
  });
});
