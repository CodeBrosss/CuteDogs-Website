const express = require('express')
const router = express.Router() // import router from express

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router;