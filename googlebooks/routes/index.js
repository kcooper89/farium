const router = require('express').Router();
const db = require('../models');

router.get('/api/books', (req, res) => {
    db.Book.find({})
        .then(books => {
            res.json(books);
        })
        .catch(err => {
            res.status(422).send(err);
        });
});

router.post('/api/books', (req, res) => {
    console.log(req.body)
    db.Book.create(req.body)
        .then(book => {
            res.json(book);
        })
        .catch(err => {
            res.status(422).send(err);
        });
});


router.delete('/api/books/:id', (req, res) => {
    db.Book.findByIdAndRemove(req.params.id)
        .then(book => {
            res.json(book);
        })
        .catch(err => {
            res.status(422).send(err);
        });
});

module.exports = router;
