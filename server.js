// MODULES
import express from 'express';
import exphbs from 'express-handlebars';
import mongoose from 'mongoose';

// APP
const app = express();

// MONGOOSE
mongoose.connect('mongodb://localhost/markdown-blog', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

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