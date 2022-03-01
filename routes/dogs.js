const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("ALL DOGS")
})

router.get('/:id', (req, res) => {
    res.send("Viewing one dog")
})

router.get('/:id/edit', (req, res) => {
    res.send("edit one dog")
})

module.exports = router;