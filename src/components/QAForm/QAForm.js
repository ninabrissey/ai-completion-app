import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './QAForm.css';

const QAForm = ({ setQA, QA }) => {
  const [question, setQuestion] = useState('');
  const [error, setError] = useState(''); // need to use this error

  const data = {
    prompt: question,
    max_tokens: 50,
    temperature: 1,
    top_p: 1,
    n: 1,
    stream: false,
    logprobs: null,
    echo: true,
  };

  const postUserText = async () => {
    return await fetch(
      'https://api.openai.com/v1/engines/text-curie-001/completions',
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
      const response = await postUserText();
      console.log(response);
      setQA([response, ...QA]);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Box
      className="form-container"
      sx={{
        width: '100%',
        margin: '10%',
        maxWidth: '80%',
      }}
    >
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
