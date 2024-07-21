const express = require('express');
const router = express.Router();
const vocabularyController = require('../controllers/vocabularyController'); // Ensure this path is correct

// Define routes and attach handler functions
router.get('/', vocabularyController.getAllVocabularies);
router.get('/:id', vocabularyController.getVocabularyById);
router.post('/', vocabularyController.createVocabulary);
router.put('/:id', vocabularyController.updateVocabulary);
router.delete('/:id', vocabularyController.deleteVocabulary);

module.exports = router;
