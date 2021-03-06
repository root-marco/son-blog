// MODULES
import express from 'express';
import exphbs from 'express-handlebars';
import mongoose from 'mongoose';
import methodOverride from 'method-override';

// APP
const app = express();
app.use(express.urlencoded({
	extended: false,
}));

//METHOD OVERRIDE
app.use(methodOverride('_method'));

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

// MONGOOSE
try {
	await mongoose.connect('mongodb://localhost/markdown-blog', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});
	console.log('database connected');
} catch (error) {
	console.log(error);
}

// LISTEN
app.listen(3000, () => {
	console.log('server running');
});