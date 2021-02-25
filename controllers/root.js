import Article from '../models/article.js';

export async function root(req, res) {

	const articles = await Article.find().sort({
		_id: -1,
	}).lean();

	res.render('articles/index', {
		articles: articles,
	});

}