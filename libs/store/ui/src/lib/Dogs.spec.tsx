import { render } from '@testing-library/react';

import Dogs from './Dogs';

describe('Dogs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dogs />);
    expect(baseElement).toBeTruthy();
  });
});
