import React from 'react';
import { Question } from '../../types/models';
import QuestionRow from '../rows/QuestionRow';
import './QuestionList.css';

interface QuestionListProps {
  questions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <ul className="question-list">
      {questions.map(question => (
        <QuestionRow key={question.id} question={question} />
      ))}
    </ul>
  );
};

export default QuestionList;
