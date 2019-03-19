import express from 'express';
import request from 'supertest';
import configure from '../../config/express/middlewares';
import router from '../router';

const app = configure(express());
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
