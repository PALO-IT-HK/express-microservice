import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello from PALO!'));
router.post('/', (req, res) => res.send('POST from PALO!'));

export default router;
