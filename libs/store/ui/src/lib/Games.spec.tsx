import { render } from '@testing-library/react';

import Games from './Games';

describe('Games', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Games />);
    expect(baseElement).toBeTruthy();
  });
});
