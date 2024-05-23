
import React, { useEffect, useState } from 'react';
import { getQuestions } from '../../services/apiService';
import { Question } from '../../types/models';

const QuestionList: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        setError('Failed to fetch questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Question List</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;