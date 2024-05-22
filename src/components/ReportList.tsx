import React, { useEffect, useState } from 'react';
import { getReports } from '../services/apiService';

const ReportList: React.FC = () => {
  const [reports, setReports] = useState<any[]>([]);
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
          <li key={report.id}>{report.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
