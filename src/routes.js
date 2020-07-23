const express = require('express');

const router = express.Router();

router.get('/hello', (request, response) => {
    return response.json({hello: 'World'})
});

module.exports = router;