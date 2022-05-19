import React, { useEffect } from 'react';
import './QACard.css';

const QACard = ({ qa }) => {
  useEffect(() => {}, [qa]);

  return (
    <article className="qa-card">
      {qa && <p className="question">{qa.question}</p>}
      {qa && <p className="answer">{qa.answer}</p>}
    </article>
  );
};

export default QACard;
