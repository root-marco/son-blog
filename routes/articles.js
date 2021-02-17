import express from 'express';
import * as articles from '../controllers/articles.js';

const router = express.Router();

router.get('/new', articles.getNewArticle);
router.post('/new', articles.postNewArticle);

export default router;