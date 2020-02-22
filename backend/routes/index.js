var express = require('express')
var router = express.Router()
const Index = require('../model/indexModel')

router.get('/', async (req, res, next) => {
  try {
    const indexs = await Index.find()
    res.send(indexs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/:id', (req, res, next) => {
})

router.post('/', async (req, res, next) => {
  const index = new Index(({
    title: req.body.title,
    content: req.body.content
  }))

  try {
    const newIndex = await index.save()
    res.status(201).json(newIndex)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }

})

router.patch('/', (req, res, next) => {
})

router.delete('/:id', (req, res, next) => {
})

module.exports = router
