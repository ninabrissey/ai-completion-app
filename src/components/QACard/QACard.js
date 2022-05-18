import React, { useEffect } from 'react';
import './QACard.css';

const QACard = ({ qa }) => {
  useEffect(() => {}, [qa]);

  return (
    <div className="qa-card">
      {qa && <p className="display-linebreak">{qa}</p>}
    </div>
  );
};

export default QACard;
