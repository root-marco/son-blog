// MODULES
import express from 'express';
import exphbs from 'express-handlebars';

// APP
const app = express();

// HANDLEBARS
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// ROUTES
import rootRouter from './routes/root.js';
app.use('/', rootRouter);
import articleRouter from './routes/articles.js';
app.use('/articles', articleRouter);

// LISTEN
app.listen(3000, () => {
	console.log('server running');
});