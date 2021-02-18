import Article from '../models/article.js';

export const getNewArticle = (req, res) => {

	res.render('articles/new', {
		article: new Article(),
	});

};

export const postNewArticle = async (req, res) => {

	let article = new Article({
		title: req.body.title,
		description: req.body.description,
		markdown: req.body.markdown,
	});

	try {
		article = await article.save();
		res.redirect(`/articles/${article.id}`);
	} catch (error) {
		console.log(error);
		res.render('articles/new', {
			article: article,
		});
	};

};

export const articleId = (req, res) => {



};