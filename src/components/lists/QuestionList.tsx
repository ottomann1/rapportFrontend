import React from 'react';
import { Question } from '../../types/models';
import QuestionRow from '../rows/QuestionRow';

interface QuestionListProps {
  questions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <ul className="list-group">
      {questions.map(question => (
        <QuestionRow key={question.id} question={question} />
      ))}
    </ul>
  );
};

export default QuestionList;
