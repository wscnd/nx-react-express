import styles from './global-styles.module.scss';

describe('SharedStyles', () => {
  it('should just display what it is', () => {
    expect(styles['center-content']).toEqual('center-content');
  });
});
