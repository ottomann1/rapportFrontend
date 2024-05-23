import React, { useEffect, useState } from 'react';
import { getReportTemplates } from '../../services/apiService';
import { ReportTemplate, Report } from '../../types/models';
import TemplateRow from '../rows/TemplateRow';
import Modal from '../Modal';
import AnswerRow from '../rows/AnswerRow';

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
    <div className="container">
      <h1 className="my-4">Report Template List</h1>
      <ul className="list-group">
        {templates.map(template => (
          <TemplateRow
            key={template.id}
            template={template}
            onShowReports={handleShowReports}
          />
        ))}
      </ul>
      <Modal show={showModal} onClose={() => setShowModal(false)} title={modalTitle}>
        <ul className="list-group">
          {modalReports.map(report => (
            <AnswerRow key={report.id} report={report} />
          ))}
        </ul>
      </Modal>
    </div>
  );
};

export default ReportTemplateList;
