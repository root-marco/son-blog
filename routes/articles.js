import express from 'express';
import * as articles from '../controllers/articles.js';

const router = express.Router();

router.get('/new', articles.newArticle);
router.post('/new', articles.newArticle)

export default router;