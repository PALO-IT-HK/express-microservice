import dotenv from 'dotenv';
import path from 'path';

const setEnvironments = () => {
  dotenv.config({ path: path.resolve(__dirname, `../../../config.env.${process.env.NODE_ENV}`) });
};

export default setEnvironments;
