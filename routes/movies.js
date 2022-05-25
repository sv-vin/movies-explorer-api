const router = require('express').Router();
const auth = require('../middlewares/auth');

const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

const {
  parameterIdValidation,
  createMovieValidation,
} = require('../middlewares/validationJoi');

router.get('/', auth, getMovies);
router.post('/', auth, createMovieValidation, createMovie);
router.delete('/:_id', auth, parameterIdValidation('_id'), deleteMovie);

module.exports = router;
