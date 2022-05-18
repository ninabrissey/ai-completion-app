import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
        className="question-textfield" //TODO - do I need this?
        label="Ask your frequently thought question here..."
        id="fullWidth"
        multiline
        rows={8}
        color="success"
      />
      <Button className="submit-btn" variant="contained" color="success">
        SUBMIT
      </Button>
    </Box>
  );
};

export default QAForm;
