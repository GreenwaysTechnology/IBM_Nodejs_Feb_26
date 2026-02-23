const express = require('express')
const postRouter = express.Router()
const { findAll, save, findById, update, remove } = require('../services/post.service')

postRouter.get('/', async (req, res) => {
    try {
        const posts = await findAll()
        return res.json(posts)
    }
    catch (err) {
        return res.status(500).json({ err: err })
    }
})

postRouter.post('/', async (req, res) => {
    try {
        const post = req.body
        const savedPost = await save(post)
        return res.status(201).json(savedPost)
    }
    catch (err) {
        return res.status(500).json({ err: err })
    }
})
postRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const post = await findById(id)
        if (post) {
            res.json(post)
        } else {
            res.status(404).json(`For ${id} Post Not Available`)
        }
    }
    catch (err) {
        return res.status(500).json({ err: err })
    }
})
postRouter.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const postInput = req.body
        const post = await update(id, postInput)
        res.json(post)
    }
    catch (err) {
        return res.status(500).json({ err: err })
    }
})
postRouter.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await remove(id)
        res.json({ message: `${id} post has been deleted succfully!` })
    }
    catch (err) {
        return res.status(500).json({ err: err })
    }
})

module.exports = postRouter