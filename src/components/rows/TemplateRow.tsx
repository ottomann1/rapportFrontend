import React, { useState } from 'react';
import { ReportTemplate } from '../../types/models';
import QuestionList from '../lists/QuestionList';

interface TemplateRowProps {
  template: ReportTemplate;
  onShowReports: (template: ReportTemplate) => void;
}

const TemplateRow: React.FC<TemplateRowProps> = ({ template, onShowReports }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <span>{template.name}</span>
        <button className="btn btn-primary" onClick={handleToggle}>
          {expanded ? 'Hide' : 'Show'} Questions
        </button>
      </div>
      {expanded && (
        <div className="mt-3">
          <QuestionList questions={template.questions} />
          <button className="btn btn-secondary mt-2" onClick={() => onShowReports(template)}>
            Show All Reports
          </button>
        </div>
      )}
    </li>
  );
};

export default TemplateRow;
