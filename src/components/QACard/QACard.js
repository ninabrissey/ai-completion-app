import React, { useEffect } from 'react';
import './QACard.css';

const QACard = ({ qa }) => {
  useEffect(() => {
    console.log(qa);
  }, [qa]);
  return <div className="qa-card">{qa && <p>{qa.text}</p>}</div>;
};

export default QACard;
