import React, { useState } from 'react';
import { cleanAnswer } from '../../utils/cleaner';
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

  const data = {
    prompt: question,
    max_tokens: 50,
    temperature: 1,
    // top_p: 1,
    // n: 1,
    // stream: false,
    // logprobs: null,
  };

  const postUserText = async () => {
    return await fetch(
      `https://api.openai.com/v1/engines/${intelligence}/completions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    });
  };

  const setUserText = async () => {
    try {
      const data = await postUserText();
      console.log(data);
      const newQA = cleanAnswer(data, question);
      console.log(newQA);
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
      <p>Select your openAI assistant's intelligence level ⬇️</p>
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
        color="success"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button
        className="submit-btn"
        variant="contained"
        color="success"
        onClick={setUserText}
      >
        SUBMIT
      </Button>
    </Box>
  );
};

export default QAForm;
