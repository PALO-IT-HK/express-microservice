import express from 'express';
import { requestLightSide, requestDarkSide } from '../../services/star-wars';

const router = express.Router();

router.get('/', async (req, res) => {
  const response = await requestLightSide();
  return res.json(response);
});

router.post('/', async (req, res) => {
  const response = await requestDarkSide();
  return res.json(response);
});

export default router;
