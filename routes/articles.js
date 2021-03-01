import express from 'express';
import * as articles from '../controllers/articles.js';

const router = express.Router();

router.get('/new', articles.getNewArticle);
router.post('/', articles.postNewArticle);
router.get('/:slug', articles.getArticleSlug);

export default router;