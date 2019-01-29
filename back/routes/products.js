const express = require('express');
const router = express.Router();
const db = require('../helpers/config');
const util = require('util');

const queryAsync = util.promisify(db.query.bind(db));

// Nouvelle façon avec les promises
router.get('/', (req, res) => {
  queryAsync('SELECT * FROM product')
    .then(products => res.json(products))
    .catch(err => {
      res.status(500).json({
        error: err.message
      })
    })
})
// Ancienn façon de faire avec de callbacks
// router.get('/', (req, res) => {
//   db.query('SELECT * FROM product', (err, products) => {
//     if (err) {
//       return  res.status(500).json({
//         error: err.message
//       })
//     }
//     res.status(200).json(products)
//   })
// })

router.get('/:id', (req, res) => {
	queryAsync('SELECT * FROM product WHERE id = ?', req.params.id)
		.then(product => res.json(product[0]))
		.catch(err => {
			res.status(500).json({
				error: err.message
			})
		})
})

router.post('/:id', (req, res) => {
	queryAsync('INSERT INTO product SET ?', req.body)
		.then(({ insertId }) => queryAsync('SELECT * FROM product WHERE id = ?', insertId))
		.then(products => {
			product = products[0]
		})
		.catch(err => res.status(500).json({
			error: err.message
		}));
});

router.put('/:id', (req, res) => {
	queryAsync('UPDATE product SET ? WHERE id = ?', [req.body, req.params.id])
		.then(res => res.status(201))
		.catch(err => res.status(500).json({
			error: err.message
		}))
})

router.delete('/:id', (req, res) => {
	queryAsync('DELETE product WHERE id = ?', req.params.id)
		.then(res => res.status(204))
		.catch(err => res.status(500).json({
			error: err.message
		}))
})

module.exports = router;