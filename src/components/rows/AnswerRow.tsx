import React, { useState } from 'react';
import { Answer } from '../../types/models';
import './AnswerRow.css';

interface AnswerRowProps {
  answer: Answer;
}

const AnswerRow: React.FC<AnswerRowProps> = ({ answer }) => {
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <li className="answer-item">
      <div className="answer-content">
        <span className="question-text">{answer.question}</span>
        <span className="answer-text">{answer.answer}</span>
        {answer.explanation && (
          <button className="show-more-button" onClick={toggleExplanation}>
            {showExplanation ? 'Hide' : 'Show more'}
          </button>
        )}
      </div>
      {showExplanation && answer.explanation && (
        <div className="explanation">
          <strong>Explanation:</strong> {answer.explanation}
        </div>
      )}
    </li>
  );
};

export default AnswerRow;
