import express from 'express';
import auth from './auth.js';
import textGenerator from './textGenerator.js'
import verifyAPIKey from '../middlewares/verifyApiKey.js';


const router = express.Router();

router.use('/auth', auth);


router.use(verifyAPIKey);
router.use('/text-generator', textGenerator)

export default router;
