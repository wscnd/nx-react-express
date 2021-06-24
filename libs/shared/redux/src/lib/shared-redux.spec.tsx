import { render } from '@testing-library/react';

import SharedRedux from './shared-redux';

describe('SharedRedux', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedRedux />);
    expect(baseElement).toBeTruthy();
  });
});
