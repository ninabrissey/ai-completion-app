import React, { useState } from 'react';
import QACardContainer from '../QACardContainer/QACardContainer';
import QAForm from '../QAForm/QAForm';

const QAContainer = () => {
  const [QA, setQA] = useState([]);

  return (
    <section>
      <QAForm setQA={setQA} QA={QA} />
      <QACardContainer QA={QA} />
    </section>
  );
};

export default QAContainer;
