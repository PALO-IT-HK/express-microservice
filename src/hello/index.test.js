import request from 'supertest';
import app from '../configuredApp';
import router from '../routes';

app.use('/', router);

describe('hello', () => {
  it('GET', (done) => {
    request(app).get('/hello').end((err, res) => {
      const { statusCode, text } = res;

      expect(statusCode).toBe(200);
      expect(text).toBe('Hello from PALO!');
      done();
    });
  });

  it('POST', (done) => {
    request(app).post('/hello').end((err, res) => {
      const { statusCode, text } = res;

      expect(statusCode).toBe(200);
      expect(text).toBe('POST from PALO!');
      done();
    });
  });
});
