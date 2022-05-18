import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './QAForm.css';

const QAForm = () => {
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
        className="submit-question-button" //TODO - do I need this?
        label="Ask the frequently thought question here..."
        id="fullWidth"
        multiline
        rows={8}
        color="success"
      />
    </Box>
  );
};

export default QAForm;
