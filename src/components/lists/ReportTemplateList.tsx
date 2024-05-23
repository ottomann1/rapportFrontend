// src/components/ReportTemplateList.tsx

import React, { useEffect, useState } from 'react';
import { getReportTemplates } from '../../services/apiService';
import { ReportTemplate } from '../../types/models';

const ReportTemplateList: React.FC = () => {
  const [templates, setTemplates] = useState<ReportTemplate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReportTemplates = async () => {
      try {
        const data = await getReportTemplates();
        setTemplates(data);
      } catch (error) {
        setError('Failed to fetch report templates');
      } finally {
        setLoading(false);
      }
    };

    fetchReportTemplates();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Report Template List</h1>
      <ul>
        {templates.map(template => (
          <li key={template.id}>
            <strong>{template.name}</strong>
            <h2>Reports</h2>
            <ul>
              {template.reports.map(report => (
                <li key={report.id}>{report.report_title}</li>
              ))}
            </ul>
            <h2>Questions</h2>
            <ul>
              {template.questions.map(question => (
                <li key={question.id}>{question.text}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportTemplateList;
