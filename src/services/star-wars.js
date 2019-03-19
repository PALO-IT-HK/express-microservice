import { get } from 'axios';

export const requestLightSide = async () => {
  const { data } = await get(`${process.env.STAR_WARS_API}/people/1`);
  return data;
};

export const requestDarkSide = async () => {
  const { data } = await get(`${process.env.STAR_WARS_API}/people/4`);
  return data;
};
