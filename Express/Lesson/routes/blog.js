const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {

    const id  = Number(req.params.id);

    const articles = [
        {id: 1, title: 'first article', content: 'Lorem Ipsum 1'},
        {id: 2, title: 'second article', content: 'Lorem Ipsum 2'},
        {id: 3, title: 'third article', content: 'Lorem Ipsum 3'}
    ]

    const needArticle = articles.find(val => val.id === id)

    //res.send(needArticle.text);

    res.render('article', {
        title: needArticle.title,
        content: needArticle.content
    })
});

module.exports = router;