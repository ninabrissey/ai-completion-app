import React, { useEffect } from 'react';
import './QACard.css';

const QACard = ({ qa }) => {
  useEffect(() => {}, [qa]);

  return (
    <article className="qa-card">
      {qa && (
        <div className="question">
          <p className="you-label-text">You</p>
          <p>{qa.question}</p>
        </div>
      )}
      {qa && (
        <div className="answer">
          <p>{qa.answer}</p>
          <p className="open-ai-label-text">openAI Assistant</p>
        </div>
      )}
    </article>
  );
};

export default QACard;
