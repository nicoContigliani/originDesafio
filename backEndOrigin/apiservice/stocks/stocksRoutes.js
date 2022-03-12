const express = require('express');
const router = express.Router();


const stocks = require('./stocksController');


router.get('/:id', stocks.get);
router.post('/', stocks.save);
router.delete('/:id', stocks.deletes);
router.post('/:id', stocks.update);






/* GET bugdes listing. */
router.get('/arbol', function (req, res, next) {
    res.send('no se inunda másssss');
});



module.exports = router;
