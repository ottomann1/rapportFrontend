
import React, { useEffect, useState } from 'react';
import { getAnswers } from '../../services/apiService';
import { Answer } from '../../types/models';

const AnswerList: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const data = await getAnswers();
        setAnswers(data);
      } catch (error) {
        setError('Failed to fetch answers');
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Answer List</h1>
      <ul>
        {answers.map(answer => (
          <li key={answer.id}>{answer.answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnswerList;