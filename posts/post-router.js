const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    // list of post
    // select from posts
    // all database operations return a promise
    db.select('*')
    .from('posts')
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'failed to get the list of posts' });
    });
});

router.get('/:id', (req, res) => {
    // a post by it's id
    // select * from posts where id = :id
    db('posts').where({ id: req.params.id })
    .first() // grab the first item on the returned array
    .then(post => {
        res.status(200).json(post) // or without first() res.status(200).json(posts[0])
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ error: 'failed to get the list of posts' });
    });
});

router.post('/', (req, res) => {
    // add a post
    // insert into posts () values ()
    const postInfo = req.body
    db('posts').insert(postInfo, 'id') // will generate a warning on console whrn using sqlite, ignore that
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'failed to add the post' });
    })
});

router.put('/:id', (req, res) => {
    // update a post
    const id = req.params.id;
    const changes = req.body
    db('posts')
    .where({ id }) // remeber to filter or all records will be updates (BAD PANDA!!)
    .update(changes) // could be partial changes, only one column is enough
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'failed to update the post' });
    })
});

router.delete('/:id', (req, res) => {
    // delete a post
    const id = req.params.id;
    db('posts')
    .where({ id }) // remeber to filter or all records will be updates (BAD PANDA!!)
    .del()
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'failed to remove the post' });
    })
});

module.exports = router;