import exphbs from 'express-handlebars';
import express from 'express';
import articleRouter from './routes/articles.js';

const app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.listen(3000);