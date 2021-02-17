export const root = (req, res) => {

	const articles = [{
		title: 'test article',
		createdAt: new Date().toLocaleDateString('pt-BR'),
		description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, ut amet blanditiis sequi explicabo, temporibus porro omnis voluptas nesciunt tempore aperiam. Voluptatem, repudiandae assumenda quo perferendis rem voluptas ipsum mollitia.',
	}];

	res.render('index', {
		articles: articles,
	});

};