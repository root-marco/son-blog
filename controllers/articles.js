export const root = (req, res) => {

	const articles = [{
		title: 'test article',
		createdAt: Date.now(),
		description: 'askldnaslkdnsk'
	}];

	res.render('index', {
		articles: articles,
	});

};