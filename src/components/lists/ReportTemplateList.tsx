import React, { useEffect, useState } from 'react';
import { getReportTemplates } from '../../services/apiService';
import { ReportTemplate, Report } from '../../types/models';
import TemplateRow from '../rows/TemplateRow';
import Modal from '../Modal';
import './ReportTemplateList.css';

const ReportTemplateList: React.FC = () => {
  const [templates, setTemplates] = useState<ReportTemplate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalReports, setModalReports] = useState<Report[]>([]);
  const [modalTitle, setModalTitle] = useState<string>('');

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

  const handleShowReports = (template: ReportTemplate) => {
    setModalReports(template.reports);
    setModalTitle(`Reports for ${template.name}`);
    setShowModal(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Report Template List</h1>
      <ul className="template-list">
        {templates.map(template => (
          <TemplateRow
            key={template.id}
            template={template}
            onShowReports={handleShowReports}
          />
        ))}
      </ul>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalTitle}>
        <ul>
          {modalReports.map(report => (
            <li key={report.id}>
              <strong>{report.report_title}</strong>
              <p>Submitted on: {report.submitted_on}</p>
              <p>Last updated: {report.last_updated}</p>
              {/* Add more report details here */}
            </li>
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default ReportTemplateList;
