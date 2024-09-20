// const express = require('express');
// const route = express.Router(); 
// const {handleGenerateNewShortUrl,handleFindById,handlePutVisitHistory} = require('../controllers/url')

// route.post('/', handleGenerateNewShortUrl);
// // route.get('/:id',handleFindById);
// route.get('/:shortId',handlePutVisitHistory)

// module.exports = route;
const express = require('express');
const route = express.Router(); 
const { handleGenerateNewShortUrl, handleAnalysisHistory } = require('../controllers/url');

// Route for generating a new short URL
route.post('/', handleGenerateNewShortUrl);

// Route for retrieving a URL entry by its ID
// route.get('/:id', handleFindById);

// Route for handling visit history and redirection
route.get('/analysis/:shortId', handleAnalysisHistory);

module.exports = route;
