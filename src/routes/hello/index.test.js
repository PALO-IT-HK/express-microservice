import express from 'express';
import request from 'supertest';
import configure from '../../config/express/middlewares';
import router from '../router';
import { requestLightSide, requestDarkSide } from '../../services/star-wars';

jest.mock('../../services/star-wars');

const app = configure(express());
app.use('/', router);

describe('Hello', () => {
  let mockResponse;
  beforeEach(() => {
    mockResponse = { name: 'Luke Skywalker' };
  });

  it('GET', (done) => {
    requestLightSide.mockResolvedValue(mockResponse);

    request(app).get('/hello').end((err, res) => {
      const { statusCode, body } = res;

      expect(statusCode).toBe(200);
      expect(body).toEqual(mockResponse);
      done();
    });
  });

  it('POST', (done) => {
    mockResponse = { name: 'Darth Vader' };
    requestDarkSide.mockResolvedValue(mockResponse);

    request(app).post('/hello').end((err, res) => {
      const { statusCode, body } = res;

      expect(statusCode).toBe(200);
      expect(body).toEqual(mockResponse);
      done();
    });
  });
});
