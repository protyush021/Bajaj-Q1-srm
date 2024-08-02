const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const USER_ID = 'protyush_kundu_2003';
const EMAIL = 'pt3564@srmist.edu.in';
const ROLL_NUMBER = 'RA2111003010200';

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

  res.json({
    is_success: true,
    user_id: USER_ID,
    email: EMAIL,
    roll_number: ROLL_NUMBER,
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

