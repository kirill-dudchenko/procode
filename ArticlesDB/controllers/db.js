const ArticleModel = require('../models/article.js');

const addArticle = async (title, text) => {
    let article = new ArticleModel;
    article.title = title;
    article.text = text;
    article.save()
}

const findArticle = async (title) => {
    ArticleModel.find({title: title}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data[0].text)
            return data[0].text
        }
    })
}

const changeArticle = async (title, newText) => {
    ArticleModel.findOneAndUpdate( { title: title }, { text:newText }, { new: true }, (err, doc) => {
        if (err) {
            console.log(error);
        }
    });
}

module.exports = {
    addArticle,
    findArticle,
    changeArticle
}
