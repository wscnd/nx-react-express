import { render } from '@testing-library/react';

import StoreUi from './store-ui';

describe('StoreUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreUi />);
    expect(baseElement).toBeTruthy();
  });
});
