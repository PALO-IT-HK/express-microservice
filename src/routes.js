import express from 'express';
import helloRoutes from './hello';

const router = express.Router();

router.use('/hello', helloRoutes);

export default router;
