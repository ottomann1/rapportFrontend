import React from 'react';
import { Question } from '../../types/models';

interface QuestionRowProps {
  question: Question;
}

const calculateAnswers = (question: Question) => {
  const answerCounts: { [key: string]: number } = { yes: 0, no: 0, other: 0 };

  question.answers.forEach(answer => {
    if (answer.answer === 'yes') answerCounts.yes += 1;
    else if (answer.answer === 'no') answerCounts.no += 1;
    else answerCounts.other += 1;
  });

  return answerCounts;
};

const QuestionRow: React.FC<QuestionRowProps> = ({ question }) => {
  const answerCounts = calculateAnswers(question);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{question.text}</span>
      <span>Yes: {answerCounts.yes}</span>
      <span>No: {answerCounts.no}</span>
      <span>Other: {answerCounts.other}</span>
    </li>
  );
};

export default QuestionRow;
