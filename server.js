var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
`article-one` : {
  title: 'ARTICLE-ONE | PATEL KRUNAL',
  heading:'My head line for Article-one',
  date: 'March 10, 2018',
  content: `<p>
                This is my first paragraph of article one.This is my first paragraph of article one.This is my first paragraph of article one.This is my first paragraph of article one.This is my first paragraph of article one.This is my first paragraph of article one.This is my first paragraph of article one.This is my first paragraph of article one.
            </p>
            <p>
                This is my second paragraph of article one.This is my second paragraph of article one.This is my second paragraph of article one.This is my second paragraph of article one.This is my second paragraph of article one.This is my second paragraph of article one.This is my second paragraph of article one.This is my second paragraph of article one.
            </p>
            <p>
                This is my three paragraph of article one. This is my three paragraph of article one. This is my three paragraph of article one. This is my three paragraph of article one. This is my three paragraph of article one. This is my three paragraph of article one. This is my three paragraph of article one.
            </p>`
},
`article-two` : {title: 'ARTICLE-TWO | PATEL KRUNAL',
  heading:'My head line for Article-two',
  date: 'March 10, 2018',
  content: `<p>
                This is my second article for my article two.This is my second article for my article two.This is my second article for my article two.This is my second article for my article two.
            </p>`},
`article-three` : {title: 'ARTICLE-THREE | PATEL KRUNAL',
  heading:'My head line for Article-three',
  date: 'March 10, 2018',
  content: `<p>
                This is my third article for my article three. This is my third article for my article three. This is my third article for my article three. This is my third article for my article three. This is my third article for my article three. This is my third article for my article three.
            </p>`}
};

function createTemplate (data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate =`
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, intial-sale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <h1>${heading}</h1>
        <div class="containor">
            <div>
            <a href="/">Home</a>
        </div>
        
        <hr/>
        
        <div>
            ${date}
        </div>
        <div>
            ${content}
            </div>
        </div>
    </body>
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req,res){
    //articelName == articele-one
    //articles[articleName] ==  {} content for object articel one
    var articleName = req.prams.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
