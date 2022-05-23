import React, { useState } from 'react';
import { cleanAnswer } from '../../utils/cleaner';
import { postUserText } from '../../utils/apiCalls';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './QAForm.css';

const QAForm = ({ setQA, QA }) => {
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');
  const [intelligence, setIntelligence] = useState('text-curie-001');

  const questionData = {
    prompt: question,
    max_tokens: 250,
    temperature: 1,
  };

  const setUserText = async () => {
    try {
      const data = await postUserText(intelligence, questionData);
      const newQA = cleanAnswer(data, question);
      setQA([newQA, ...QA]);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Box
      className="form-container"
      sx={{
        width: '100%',
        marginLeft: '10%',
        marginRight: '10%',
        maxWidth: '80%',
      }}
    >
      <p>
        Select your openAI assistant's intelligence level and then type your
        question!
      </p>
      <FormControl required sx={{ m: 1, minWidth: 200, marginBottom: 4 }}>
        <InputLabel id="intelligence-level-required-label">
          Select Intelligence
        </InputLabel>
        <Select
          labelId="intelligence-level-required-label"
          id="intelligence-level-required"
          value={intelligence}
          label="Select intelligence Level *"
          onChange={(e) => setIntelligence(e.target.value)}
        >
          <MenuItem value={'text-davinci-002'}>Super Intellegent</MenuItem>
          <MenuItem value={'text-curie-001'}>Intellegent</MenuItem>
          <MenuItem value={'text-babbage-001'}>Mildly Intellegent</MenuItem>
          <MenuItem value={'text-ada-001'}>
            Let's not be mean. Still very smart.
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Ask your frequently thought question here..."
        id="fullWidth"
        multiline
        rows={8}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button
        sx={{
          background: '#12C39A',
        }}
        className="submit-btn"
        variant="contained"
        onClick={setUserText}
      >
        SUBMIT
      </Button>
    </Box>
  );
};

export default QAForm;
