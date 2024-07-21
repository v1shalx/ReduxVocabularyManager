const Vocabulary = require('../models/Vocabulary');

exports.getAllVocabularies = async (req, res) => {
  try {
    const vocabularies = await Vocabulary.find();
    if (vocabularies.length === 0) {
      return res.status(404).json({ message: 'No vocabularies found.' });
    }
    res.status(200).json(vocabularies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getVocabularyById = async (req, res) => {
  try {
    const vocabulary = await Vocabulary.findById(req.params.id);
    if (!vocabulary) {
      return res.status(404).json({ message: 'Vocabulary not found.' });
    }
    res.status(200).json(vocabulary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createVocabulary = async (req, res) => {
  try {
    const newVocabulary = new Vocabulary(req.body);
    await newVocabulary.save();
    res.status(201).json(newVocabulary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateVocabulary = async (req, res) => {
  try {
    const updatedVocabulary = await Vocabulary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVocabulary) {
      return res.status(404).json({ message: 'Vocabulary not found.' });
    }
    res.status(200).json(updatedVocabulary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteVocabulary = async (req, res) => {
  try {
    const deletedVocabulary = await Vocabulary.findByIdAndDelete(req.params.id);
    if (!deletedVocabulary) {
      return res.status(404).json({ message: 'Vocabulary not found.' });
    }
    res.status(200).json({ message: 'Vocabulary deleted.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
