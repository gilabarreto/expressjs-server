const express = require('express');
const members = require('../../Members');
const router = express.Router();

// Get All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  }
  return res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
});

// Create Member
router.post('/', () => {
  res.send(req.body);
});

module.exports = router;