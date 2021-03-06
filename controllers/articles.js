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
		res.redirect(`/articles/${article.slug}`);
	} catch (error) {
		res.render('articles/new', {
			article: article,
		});
	};

};

export async function getArticleSlug(req, res) {

	const article = await Article.findOne({ slug: req.params.slug }).lean();

	if (article == null) res.redirect('/new');

	res.render('articles/show', {
		article: article,
	});

};

export async function deleteArticleId(req, res) {

	await Article.findByIdAndDelete(req.params.id);
	res.redirect('/');

};