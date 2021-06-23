import { formatRating } from './formatters';

describe('formatRating', () => {
  it('should format correctly', () => {
    expect(formatRating(0.930123)).toEqual('9.3 / 10');
  });
});
