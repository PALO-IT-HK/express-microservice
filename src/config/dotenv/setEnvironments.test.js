import setEnvironments from './setEnvironments';

describe('dotenv', () => {
  it('should set environments', () => {
    setEnvironments();
    expect(typeof process.env.PORT).toBe('string');
  });
});
