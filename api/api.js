let news = require('./news.json');
var detail = require('./detail.json');

let express = require("express");
let app = express();
let cors = require('cors');

app.use(cors());

app.listen(4444, () => {
	console.log("Server running on port 4444");
});

app.get('/get-news', (req, res, next) => {
	res.json(news);
});

app.get('/get-detail?:news_id', (req, res, next) => {
	res.json(detail);
});

app.get('/get-related?:news_id', (req, res, next) => {
	res.json(news);
});
