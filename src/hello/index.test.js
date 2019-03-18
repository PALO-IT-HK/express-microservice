import express from 'express';
import request from 'supertest';
import router from './index';

const app = express();
app.use('/', router);

describe('hello', () => {
  it('GET', (done) => {
    request(app).get('/').end((err, res) => {
      const { statusCode, text } = res;

      expect(statusCode).toBe(200);
      expect(text).toBe('Hello from PALO!');
      done();
    });
  });

  it('POST', (done) => {
    request(app).post('/').end((err, res) => {
      const { statusCode, text } = res;

      expect(statusCode).toBe(200);
      expect(text).toBe('POST from PALO!');
      done();
    });
  });
});
