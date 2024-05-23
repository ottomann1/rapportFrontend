import React, { useState } from 'react';
import { ReportTemplate } from '../../types/models';
import QuestionList from '../lists/QuestionList';
import './TemplateRow.css';

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
    <li className="template-item">
      <div className="template-header">
        <span>{template.name}</span>
        <button onClick={handleToggle}>
          {expanded ? 'Hide' : 'Show'} Questions
        </button>
      </div>
      {expanded && (
        <div className="questions-container">
          <QuestionList questions={template.questions} />
          <button onClick={() => onShowReports(template)}>
            Show All Reports
          </button>
        </div>
      )}
    </li>
  );
};

export default TemplateRow;
