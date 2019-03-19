import axios from 'axios';
import { requestLightSide, requestDarkSide } from './star-wars';

jest.mock('axios');

describe('Star Wars Service', () => {
  let mockResponse;
  beforeEach(() => {
    mockResponse = {
      data: {
        name: 'Luke Skywalker',
      },
    };
  });

  it('should call Luke', async () => {
    axios.get.mockResolvedValue(mockResponse);

    const { data } = mockResponse;
    const response = await requestLightSide();
    expect(response).toEqual(data);
  });

  it('should call Darth', async () => {
    mockResponse.data.name = 'Darth Vader';
    axios.get.mockResolvedValue(mockResponse);

    const { data } = mockResponse;
    const response = await requestDarkSide();
    expect(response).toEqual(data);
  });
});
