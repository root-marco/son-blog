import express from 'express';
import exphbs from 'express-handlebars';

import articleRouter from './routes/articles.js';
import rootRouter from './routes/root.js';

const app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.use('/', rootRouter);
app.use('/articles', articleRouter);

app.listen(3000);