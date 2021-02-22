import Article from '../models/article.js';

export function getNewArticle(req, res) {

	res.render('articles/new', {
		article: new Article(),
	});

};

export async function postNewArticle(req, res) {

	let article = new Article({
		title: req.body.title,
		description: req.body.description,
		markdown: req.body.markdown,
	});

	try {
		article = await article.save();
		res.redirect(`/articles/${article.id}`);
	} catch (error) {
		res.render('articles/new', {
			article: article,
		});
	};

};

export async function getArticleId(req, res) {

	const article = await Article.findById(req.params.id);
	res.render('articles/show', {
		article: article,
	});

};