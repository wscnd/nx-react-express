import { render } from '@testing-library/react';

import GameDetail from './GameDetail';

describe('GameDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameDetail />);
    expect(baseElement).toBeTruthy();
  });
});
