import React, { useEffect, useState } from 'react';
import QACard from '../QACard/QACard';
import QAForm from '../QAForm/QAForm';
import './QAContainer.css';

const QAContainer = () => {
  const [QA, setQA] = useState([]);

  useEffect(() => {}, [QA]);

  return (
    <section className="qa-container">
      <QAForm setQA={setQA} QA={QA} />
      {QA && (
        <div className="qa-card-container">
          {QA.map((qa) => {
            return <QACard key={qa.id} qa={qa} />;
          })}
        </div>
      )}
    </section>
  );
};

export default QAContainer;
