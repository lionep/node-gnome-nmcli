import expect from 'expect';
import Nmcli from '../src/nmcli';

describe('Nmcli', () => {
  it('should be a function', () => {
    expect(typeof Nmcli).toBe('function');
  });
});
