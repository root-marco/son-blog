import express from 'express';
import * as articles from '../controllers/articles.js';

const router = express.Router();

router.get('/', articles.root);

export default router;