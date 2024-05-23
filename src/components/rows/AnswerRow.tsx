import React, { useState } from 'react';
import { Answer, Report } from '../../types/models';
import './AnswerRow.css';

interface AnswerRowProps {
  report: Report;
}

const AnswerRow: React.FC<AnswerRowProps> = ({ report }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="list-group-item" onClick={toggleDetails}>
      <div className="d-flex justify-content-between align-items-center">
        <span className="flex-grow-1">{report.report_title}</span>
        <button className="btn btn-link" onClick={toggleDetails}>
          {showDetails ? 'Hide' : 'Show more'}
        </button>
      </div>
      {showDetails && (
        <div className="mt-2">
          {report.questions.map((question) => (
            <div key={question.id} className="question-item mt-3">
              <strong>Question:</strong> {question.text}
              {question.answers.map((answer) => (
                <div key={answer.id} className="answer-item mt-2">
                  <strong>Answer:</strong> {answer.answer}
                  {answer.explanation && (
                    <div className="explanation mt-1">
                      <strong>Explanation:</strong> {answer.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
          <div className="report-details mt-3">
            <p>
              Reported by {report.submitted_by} at {report.company}
            </p>
            <p>Submitted on: {report.submitted_on}</p>
            <p>Last updated: {report.last_updated}</p>
          </div>
        </div>
      )}
    </li>
  );
};

export default AnswerRow;
