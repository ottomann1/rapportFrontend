import React, { useEffect, useState } from 'react';
import { getReports } from '../../services/apiService';
import { Report } from '../../types/models';

const ReportList: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReports();
        setReports(data);
      } catch (error) {
        setError('Failed to fetch reports');
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Report List</h1>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            <strong>{report.report_title}</strong>
            <h2>Questions</h2>
            <ul>
              {report.questions.map(question => (
                <li key={question.id}>
                  <strong>Question:</strong> {question.text}
                  <ul>
                    {question.answers.map(answer => (
                      <li key={answer.id}>
                        <strong>Answer:</strong> {answer.answer}
                        <br />
                        <strong>Explanation:</strong> {answer.explanation}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
