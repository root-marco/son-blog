import exphbs from 'express-handlebars';
import express from 'express';
const app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(3000);